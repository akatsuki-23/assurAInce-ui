import MuiButton from "@mui/material/Button";

const Button = ({
  children,
  variant = "contained",
  className = "",
  bgColor = "",
  hoverBgColor = "",
  onClick,
  style = {},
}) => {
  return (
    <MuiButton
      variant={variant}
      className={className}
      sx={[
        style,
        {
          textTransform: "none",
          backgroundColor: bgColor,
          "&:hover": {
            backgroundColor: hoverBgColor || bgColor,
          },
        },
      ]}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
