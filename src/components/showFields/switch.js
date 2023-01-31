import React, { useContext, useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { UserContext } from '../../contexts/user';
import MuiToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const ToggleButton = styled(MuiToggleButton)({
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "white",
    backgroundColor: 'green',
    // borderRadius: 20
  },
  "&.MuiToggleButton-root": {
    color: "#8D8D8D",
    // borderRadius: 20
  },
  "&.Mui-selected": {
    color: "white",
    backgroundColor: 'green',
    // borderRadius: 20
  },
  "&.MuiToggleButton-standard": {
    borderRadius: 20
  }
});


export default function SwitchContainer(props) {
  const { onChange, value, width, left, right, headerName, optionUrl, optionVariable, optionMainVariable, } = props
  const { userState, userDispatch } = useContext(UserContext);
  const [serverOptions, setServerOptions] = useState([])
  let defaultCase = 'left'
  if (value === right) {
    defaultCase = 'right'
  }
  const newOption1 = (((optionUrl && optionVariable) && serverOptions ) || [])?.[0]
  const newOption2 = (((optionUrl && optionVariable) && serverOptions ) || [])?.[1]
  console.log('12312321value', value)
  useEffect(() => {
    fetchOptions()
  }, [])

  const [alignment, setAlignment] = React.useState('');
  
  const fetchOptions = async () => {
    let json = {}
    // console.log("userState.serverOptions?.[optionUrl]", userState.serverOptions?.[optionUrl])
    if (userState.serverOptions?.[optionUrl]) {
      json = userState.serverOptions?.[optionUrl]
      if (optionMainVariable) {
        json = userState.serverOptions?.[optionUrl]?.[optionMainVariable]
      }
    } else {
      const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}${optionUrl}`, { method: 'GET' })

      json = await response.json()
      if (json.data) {
        json = json.data
      }
      userDispatch({
        type: 'UPDATE_SERVER_OPTIONS',
        payload: { [optionUrl]: json },
      });
      if (optionMainVariable) {
        json = optionMainVariable ? json[optionMainVariable] : json
      }      
    }
    setServerOptions(json.map(el => el[optionVariable]))
    // handleAlignment(null, defaultCase)
  }

  const handleAlignment = (event, newAlignment) => {
    console.log('erqeqewqqw', newAlignment)
    setAlignment(newAlignment || defaultCase);
    if (newAlignment === 'left') {
      onChange(newOption1 || left)
    } else {
      onChange(newOption2 || right)
    }
  };

  return (
    <div style={{ width: width, }}>
      <FormControl sx={{ width: width, pr: 1, mb: 2 }}>
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
          {headerName}{props.required ? "*" : ""}
        </Typography>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton
            value="left"
            aria-label="left aligned"
            sx={{
              "&.Mui-selected, &.Mui-selected:hover": {
                color: "white ",
                backgroundColor: '#24352F',
              },
              "&.MuiToggleButton-root": {
                color: "#8D8D8D",
              },
              "&.Mui-selected": {
                color: "white",
                backgroundColor: '#24352F',
              }
            }}
          >
            {newOption1}
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned" selectedColor="pink">
            {newOption2}
          </ToggleButton>
        </ToggleButtonGroup>
      </FormControl>
    </div>
  );
}