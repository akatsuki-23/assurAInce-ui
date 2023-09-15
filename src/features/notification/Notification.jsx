import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import Toast from "../../components/toast/Toast";
import { alerts } from "../../store/notification";

const Notification = () => {

  const notifications = useRecoilValue(alerts);

  const [alert, setAlert] = useState({
    type: "success",
    message: "",
    description: ""
  });
  const [show, setShow] = useState(false);

  const hideToast = () => {
    
    setShow(false);
  };

  const showToast = () => setShow(true);

   useEffect(() => {
    if (notifications.length > 0) {
      setAlert(notifications[notifications.length - 1]);
      showToast();

      setTimeout(() => {
        hideToast();
      }, 2000);
    }
  }, [notifications]);

  return show ? (
    <div className="absolute bottom-6 right-6 z-30 flex justify-center">
      <Toast type={alert.type} title={alert.message} description={alert.description}/>
    </div>
  ) : null;
};

export default Notification;
