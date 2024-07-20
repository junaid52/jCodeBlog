'use client';
import { TextField } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
const CustomizedTextField = styled(TextField)(({ theme }) => {
  return {
    '& .MuiOutlinedInput-root.Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor:
          theme.palette.mode !== 'dark'
            ? theme.palette.primary.main
            : 'rgba(255, 255, 255, 0.23)',
      },
    },
  };
});
export default CustomizedTextField;
