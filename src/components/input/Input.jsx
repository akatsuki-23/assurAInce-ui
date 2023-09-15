import { TextField } from '@mui/material';

const Input = ({
  value,
  type,
  placeholder,
  onChange,
  width,
  height,
  style = {},
}) => {
  return (
    <TextField
      sx={[
        style,
        {
          width: width || '358px',
          height: height || '',
          borderColor: '#D0D5DD',
        },
      ]}
      variant="outlined"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
    />
  );
};

export default Input;
