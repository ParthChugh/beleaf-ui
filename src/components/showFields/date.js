import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function CustomDatePicker(props) {
  const { onChange, width, height, name, error, headerName } = props;
  const handleChange = (event) => {
    onChange(event)
  };
  let value = props.value
  value = value ? dayjs(value) : ''
  console.log('value1232132', value)
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
          }
        }}
        >
          {headerName}{props.required ? "*" : ""}
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            {...props}
            value={value}
            inputProps={{
              style: {
                height: height,
                fontSize: 13
              },
            }}
            onChange={(newValue) => {
              handleChange(newValue);
            }}
            renderInput={(params) =>
              <TextField
                {...params}
                placeholder=""
                error={error}
                value={params.value}
              />}
          />
        </LocalizationProvider>
      </FormControl>
    </div>
  );
}