import React, { useEffect, useState, useContext } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { UserContext } from '../../contexts/user';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";
import CircularProgress from '@mui/material/CircularProgress';

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

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
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
  const AutoComplete = styled(Autocomplete)`
  & .MuiInputBase-input {
    height: ${height};
  }
`;
  const [open, setOpen] = useState(false);
  // const [options, setOptions] = React.useState([]);
  const [text, onTextChange] = useState('');
  
  const onChangeTextValue = (value) => {
    console.log('props1232131232112123', value)
    onTextChange(value)
    fetchOptions(value)
  }
  let { optionUrl } = props
  const { userState, userDispatch } = useContext(UserContext);
  const [serverOptions, setServerOptions] = useState([])
  const loading = open && serverOptions?.length === 0;
  const theme = useTheme();
  console.log('serverOptions12321', serverOptions)
  const detectedValue = optionUrl?.split(':')[1]
  const handleChange = (event) => {
    console.log("event12312", event)
    onChange(event)
  };
  useEffect(() => {
    if(value) {
      fetchOptions(value)
    }
  },[])
  // useEffect(() => {    
  //   let active = true;
  //   if (!loading) {
  //     return undefined;
  //   }
  //   (async () => {
  //     await sleep(1e3); // For demo purposes.
  //     if (active) {
  //       // setOptions([...topFilms]);
  //     }
  //   })();
  //   return () => {
  //     active = false;
  //   };
  // }, [loading]);
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

  const fetchOptions = async (searchText) => {
    if(!searchText) {
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
    } else {
      optionUrl = `${optionUrl.split(':')[0]}?${props.searchField}=${searchText}`

    }
    let json = {}
    
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
    console.log('json213123', json)
    userDispatch({
      type: 'UPDATE_SERVER_OPTIONS',
      payload: { [optionUrl.split('?')[0]]: json },
    });
    if (optionMainVariable) {
      json = optionMainVariable ? json[optionMainVariable] : json
    }
    
    console.log("json.map(el => el[props.requestKeyName || optionVariable])", json.map(el => el[props.requestKeyName || optionVariable]))
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
        <Autocomplete
          {...props}
          id="asynchronous-demo"
          sx={{
            height: height,
          }}
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          onChange={(e, data) => handleChange(data)}
          isOptionEqualToValue={(option, value) => option === value}
          getOptionLabel={(option) => option}
          options={serverOptions}
          loading={loading}
          renderInput={(params) => {
            console.log('params.InputProps', params.InputProps)
            return (
              <TextField
                {...params}
                onChange={(e) => onChangeTextValue(e.target.value)}
                label=""
                InputProps={{
                  ...params.InputProps,
                  style: {
                    height: height,
                  },
                  endAdornment: (
                    <>
                      {loading ? <CircularProgress color="inherit" size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
              />
            )
          }}
        />
      </FormControl>
      {error && <div>This field is required</div>}
    </div>
  );
}