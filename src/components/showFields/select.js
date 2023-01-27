import React, { useEffect, useState, useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import { UserContext } from '../../contexts/user';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.includes(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectPlaceholder(props) {
  const { options, placeholder, onChange, value, width, height, name, optionUrl, optionVariable, optionMainVariable } = props;
  const { userState, userDispatch } = useContext(UserContext);
  const [serverOptions, setServerOptions] = useState([])
  const theme = useTheme();
  const handleChange = (event) => {
    onChange(event)
  };

  const fetchOptions = async () => {
    let json = {}
    if (userState.serverOptions?.[optionUrl]) {
      debugger;
      json = userState.serverOptions?.[optionUrl]
      if (optionMainVariable) {
        json = userState.serverOptions?.[optionUrl]?.[optionMainVariable]
      }
    } else {
      console.log("optionUrl12312", optionUrl)
      const response = await fetch(optionUrl, { method: 'GET' })
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
  }
  useEffect(() => {
    if (optionUrl && optionVariable) {
      fetchOptions()
    }
  }, [optionUrl, optionVariable])

  return (
    <div style={{ width: width, }}>
      <FormControl sx={{ width: width, pr: 1, }}>
        {name &&
          <Typography
            sx={{
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
            {name}{props.required ? "*" : ""}
          </Typography>
        }
        <Select
          {...props}
          displayEmpty
          value={value}
          sx={{
            height: height,
          }}
          onChange={handleChange}
          input={<OutlinedInput />}
          MenuProps={MenuProps}

          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>{placeholder}</em>
          </MenuItem>
          {(((optionUrl && optionVariable) ? serverOptions : options) || []).map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, value, theme)}
              className="select__name"
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}