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

function getStyles(theme) {
  return {
    fontWeight: theme.typography.fontWeightRegular
  };
}

export default function MultipleSelectPlaceholder(props) {
  const {
    options,
    placeholder,
    onChange,
    value,
    width,
    height,
    name,
    optionVariable,
    optionMainVariable,
    headerName,
    watch,
    detectedFields,
    dependent,
    setValue,
    error
  } = props;
  console.log('props12321312', props)
  let { optionUrl } = props
  const { userState, userDispatch } = useContext(UserContext);
  const [serverOptions, setServerOptions] = useState([])
  const theme = useTheme();
  console.log('optionUrl12321', optionUrl)
  const detectedValue = optionUrl?.split(':')[1]
  const handleChange = (event) => {
    console.log("event123123", event)
    onChange(event)
  };
  useEffect(() => {
    if (dependent && watch(dependent) && userState?.serverOptions?.[optionUrl]?.[optionMainVariable]) {
      optionUrl = optionUrl.split(':')[0]
      const serverData = userState?.serverOptions?.[optionUrl]?.[optionMainVariable]
      const data = serverData.find(el => el[props.dependentVariable] === watch(dependent))
      console.log("data?.optionVariable", data?.[dependent])
      if (data?.[optionVariable]) {
        setValue(name, data?.[optionVariable])
      }
    }
  }, [dependent && watch(dependent), JSON.stringify(userState?.serverOptions?.[optionUrl]?.[optionMainVariable] || {})])
  const fetchOptions = async () => {
    optionUrl = optionUrl.split(':')[0]
    let appendingValue = ""
    if (detectedValue) {
      appendingValue = watch(detectedValue)
      // detectedFields
      if (userState?.serverOptions?.[detectedFields.optionUrl]) {
        const serverData = userState?.serverOptions?.[detectedFields.optionUrl]
        const data = serverData.find(el => el[detectedFields.optionVariable] === appendingValue)
        appendingValue = data[detectedFields.valueToTake]
      }
      optionUrl = optionUrl + appendingValue
    }
    let json = {}
    // console.log("userState.serverOptions?.[optionUrl]", userState.serverOptions?.[optionUrl])
    if (userState.serverOptions?.[optionUrl]) {
      json = userState.serverOptions?.[optionUrl]
      if (optionMainVariable) {
        json = userState.serverOptions?.[optionUrl]?.[optionMainVariable]
      }
    } else {
      const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}${optionUrl}`, {
        method: 'GET',
        headers: {
          "ngrok-skip-browser-warning": true
        }
      })

      json = await response.json()
      if (json.data) {
        json = json.data
      }
      userDispatch({
        type: 'UPDATE_SERVER_OPTIONS',
        payload: { [optionUrl.split('?')[0]]: json },
      });
      if (optionMainVariable) {
        json = optionMainVariable ? json[optionMainVariable] : json
      }

    }

    // console.log("json.map(el =>", json.map(el => el[optionVariable]))


    setServerOptions(json.map(el => el[props.requestKeyName || optionVariable]))
  }
  useEffect(() => {
    if (optionUrl && optionVariable) {
      fetchOptions()
    }
  }, [optionUrl, optionVariable, userState?.serverOptions?.[detectedFields?.optionUrl], detectedValue && watch(detectedValue)])

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
            {headerName}{props.required ? "*" : ""}
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
              style={getStyles(theme)}
              className="select__name"
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {error && <div>This field is required</div>}
    </div>
  );
}