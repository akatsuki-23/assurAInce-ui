import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';

const Input = ({
  value,
  type,
  placeholder,
  onChange,
  width,
  height,
  style = {},
}) => {
  const [showPassword, setShowPassword] = useState(false);
const handleClickShowPassword = () => setShowPassword(!showPassword);
const handleMouseDownPassword = () => setShowPassword(!showPassword);
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
      type={type === 'password' ? showPassword ? "text" : "password": type}
      InputProps={{ // <-- This is where the toggle button is added.
        endAdornment: type === 'password' ?(
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ): null
      }}
    />
  );
};

export default Input;
