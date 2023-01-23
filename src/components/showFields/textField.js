import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function CustomTextField(props) {
  const { onChange, value, width, height, name } = props;
  const handleChange = (event) => {
    onChange(event)
  };

  return (
    <div>
      <FormControl sx={{ width: width, pr: 4, mb: 2 }}>
        <Typography sx={{
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "21px",
          "&.MuiButtonBase-root:hover": {
            bgcolor: "transparent"
          },
        }}
        >
          {name}{props.required ? "*": ""}
        </Typography>
        <TextField
          hiddenLabel
          {...props}
          value={value}
          inputProps={{
            style: {
              height: height,
            },
          }}
          onChange={handleChange}
        />
      </FormControl>
    </div>
  );
}