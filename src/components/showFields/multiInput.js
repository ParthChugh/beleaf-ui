import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from './select';
import Add from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';
import Link from '@mui/material/Link'

export default function CustomMultiInput(props) {
  const { onChange, value, rows, headerName } = props;
  console.log('value12321', value)
  // console.log('props12312321', props)
  let location = useLocation();

  const handleChange = (event) => {
    onChange(event)
  };
  // console.log('rows12321', value)
  return (
    <div style={{
      overflowX: "auto"
    }}>
      <table>
        <tr>
          {rows.map(row => {
            return (
              <th>
                <Typography sx={{ color: "#3EB049", width: row.width, fontFamily: 'Poppins' }}>
                  {row.headerName}
                </Typography>
              </th>
            )
          })}
        </tr>
        
        {(value || []).map((field, index) => {
          const keys = Object.keys(field)
          return (
            <tr>
              {keys.map(key => {
                const row = rows.find(el => el.name === key)
                // console.log("row123123", row)
                 if(typeof row === 'undefined') return <div />
                switch (row.type) {
                  case 'link':
                    return (
                      <td>
                        <Link sx={{
                          mt: 1,
                          mb: 3,
                          alignItems: 'center',
                          display: 'flex'
                        }}
                        // href={`${location.pathname}/${value[index][key]}`}
                        >
                          <Typography>
                            {value[index][key]}
                          </Typography>
                        </Link>
                      </td>

                    )
                  case 'dropdown':
                    return (
                      <td>
                        <Box sx={{
                          mt: 2,
                          mb: 2,
                        }}>
                          <Select
                            {...row}
                            disabled={props.disabled}
                            placeholder=""
                            value={field[key]}
                            onChange={(event) => {
                              value[index][key] = event.target.value
                              onChange(value)
                            }}
                            name=""
                          />
                        </Box>
                      </td>
                    )
                  default: {
                    return (
                      <td>
                        <TextField
                          {...row}
                          disabled={row.disabled || props.disabled}
                          placeholder=""
                          value={field[key]}
                          sx={{
                            mt: 1,
                            mb: 1,
                            ml: 1,
                            mr: 2
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
                      </td>
                    )
                  }
                }
              })}
            </tr>
          )
        })}
      </table >
      {
        !props.disabled &&
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
            if ((value || []).length > 0) {
              if (Object.values(value[value.length - 1]).join('') === '') {
                alert('Please add details in the previous row')
                return;
              }
            }
            value[(value || []).length] = fields
            onChange(value)
          }}
        >
          Add {headerName} <Add />
        </Typography>
      }
    </div >
  );
}