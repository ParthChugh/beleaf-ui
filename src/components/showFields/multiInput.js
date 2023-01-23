import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Add from '@mui/icons-material/Add';
import Box from '@mui/material/Box';

export default function CustomMultiInput(props) {
  const { onChange, value, width, height, rows, name } = props;
  console.log('props12312321', props)
  const handleChange = (event) => {
    onChange(event)
  };

  return (
    <>
      <Box className="multiinput__container">
        <Box className="multiinput__box">
          {rows.map(row => {
            return (
              <Typography sx={{ color: "#3EB049", width: row.width, fontFamily: 'Poppins' }}>
                {row.name}
              </Typography>
            )
          })}
        </Box>
        {value.map((field, index) => {
          const keys = Object.keys(field)
          return (
            <div className="multiinputs__value_fields_container">
              {keys.map(key => {
                const row = rows.find(el => el.name === key)
                console.log("field[key]", field[key])
                return (
                  <TextField
                    {...row}
                    disabled={props.disabled}
                    placeholder=""
                    value={field[key]}
                    sx={{
                      mt: 3,
                      mb: 3,
                    }}
                    inputProps={{
                      style: {
                        height: row.height,
                        width: row.width,
                        fontFamily: 'Poppins'
                      },
                    }}
                    onChange={(event) => {
                      value[index][key] = event.target.value
                      onChange(value)
                    }}
                  />
                )
              })}
            </div>

          )
        })}
        {!props.disabled &&
          <Typography sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "21px",
            "&.MuiButtonBase-root:hover": {
              bgcolor: "transparent"
            },
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: "#C4C4C424",
            paddingTop: "16.5px",
            paddingBottom: "16.5px",
            color: '#3EB049',
            cursor: 'pointer'
          }}

            onClick={() => {
              let fields = {}
              rows.forEach((row) => {
                fields[row.name] = ""
              })
              value[(value || []).length + 1] = fields
              onChange(value)
            }}
          >
            Add {name} <Add />
          </Typography>
        }

      </Box>
    </>
  );
}