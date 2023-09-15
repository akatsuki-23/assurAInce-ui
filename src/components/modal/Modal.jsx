import { Modal } from "@mui/material";
import { useEffect, useState } from "react";

const CustomModal = ({ className, onClose, children, open }) => {
  const [_open, setOpen] = useState(true);
  const _handleClose = (event, reason) => {
    if (reason && reason == "backdropClick") setOpen(false);
    if (onClose) onClose();
  };

  useEffect(() => {
    setOpen(open);
  }, [open]);
  return (
    <Modal open={_open} onClose={_handleClose}>
      <div className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-6 rounded-md ${className}`}>
        {children}
      </div>
    </Modal>
  );
};

export default CustomModal;
