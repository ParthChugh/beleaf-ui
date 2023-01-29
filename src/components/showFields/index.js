import React, { useEffect, useState, useContext } from 'react'
import Select from './select';
import { useForm, Controller } from "react-hook-form";
import Box from '@mui/material/Box';
import './ShowFields.css'
import TextField from './textField';
import DatePicker from './date';
import MultiInput from './multiInput';
import AttachImage from './attachImage'
import Switch from './switch'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MapContainer from './map';
import { UserContext } from '../../contexts/user';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const useStyles = makeStyles(theme => ({
  customTabRoot: {
    color: 'black'
  },
  customTabIndicator: {
    backgroundColor: "#3EB049",
  }
}));
export default function ShowFields(props) {
  const { type, values, onSubmitCustomField } = props
  const [edit, setEdit] = useState(props.edit || {})
  const { userState, userDispatch } = useContext(UserContext);
  const classes = useStyles();
  // console.log('props21321', props)
  const defaultValues = {}
  values.forEach((value) => {
    defaultValues[value.name] = userState.drafts?.[type]?.[value.name] || value.value
  })
  console.log('defaultValues123123', defaultValues)
  console.log('userState.drafts23123', userState.drafts)
  const { control, handleSubmit, formState, reset, watch } = useForm({
    defaultValues
  });

  useEffect(() => {
    reset(defaultValues)
  }, [JSON.stringify(defaultValues || {})])

  useEffect(() => {
    if (props.sendRequest) {
      handleSubmit(onSendReq)()
    }
  }, [props.sendRequest])
  
  useEffect(() => {
    if(Object.values(formState.errors).length > 0) {
      userDispatch({
        type: 'UPDATE_ERROR',
        payload: { [type]: formState.errors },
      });
    }
  },[JSON.stringify(formState.errors || {})])

  console.log('userState12321', userState)
  const onSendReq = (params) => {
    try {
      let localErrors = []
      const flatterdArray = [].concat(...Object.values(Object.values(params)[0]).map(el => {
        return Object.values(el)
      }))
      flatterdArray.forEach((el) => {
        if (el === "") {
          localErrors.push(el)
        }
      })
      if (localErrors.length > 0) {
        userDispatch({
          type: 'UPDATE_ERROR',
          payload: { [type]: `Please add the details in ${type}` },
        });
        // props.setSendRequest && props.setSendRequest(false)
        alert(`Please add details in ${type}`)
        return;
      }
      // props.setSendRequest && props.setSendRequest(false)
      // if (userState.errors[type]) {
      userDispatch({
        type: 'UPDATE_ERROR',
        payload: { [type]: "" },
      });
      // }
      userDispatch({
        type: 'UPDATE_DATA',
        payload: { [type]: params },
      });
      onSubmitCustomField && onSubmitCustomField(params)
    } catch (el) {
    }

  }

  const onSubmit = (params, form) => {
    try {
      let localErrors = []
      const flatterdArray = [].concat(...Object.values(Object.values(params)[0]).map(el => {
        return Object.values(el)
      }))
      flatterdArray.forEach((el) => {
        if (el === "") {
          localErrors.push(el)
        }
      })
      if (localErrors.length > 0) {
        alert(`Please add the details in ${type}`)
        return;
      }
      setEdit({ ...edit, [type]: false })
    } catch (el) {
      setEdit({ ...edit, [type]: false })
    }
  }
  
  const createField = (field, index) => {
    const name = field.name
    const dependant = (field.dependant || "")?.split('.')
    if (dependant.length > 0 && watch(dependant[0]) !== dependant[1]) {
      return <div />
    }

    // if(dependant.length > 0 && )
    switch (field.type) {
      case "switch":
        return (
          <Controller
            name={field.name}
            control={control}
            rules={{ required: field.required }}
            render={(props) => {
              const { field: customField } = props;
              console.log('props123123', props)
              return (
                <Switch
                  {...customField}
                  {...field}
                  disabled={!edit[type]}
                  value={customField.value || ""}
                />
              )
            }
            }
          />
        )
      case "attach-image":
        return (
          <Controller
            name={field.name}
            control={control}
            rules={{ required: field.required }}
            render={(props) => {
              const { field: customField } = props;
              console.log('props123123', props)
              return (
                <AttachImage
                  {...customField}
                  {...field}
                  disabled={!edit[type]}
                  value={customField.value || ""}
                />
              )
            }
            }
          />
        )
      case "dropdown":
        return (
          <Controller
            name={field.name}
            control={control}
            rules={{ required: field.required }}
            render={(props) => {
              const { field: customField } = props;
              console.log('props123123', props)
              return (
                <Select
                  {...customField}
                  {...field}
                  disabled={!edit[type]}
                  value={customField.value || ""}
                />
              )
            }
            }
          />
        )
      case "input":
        return (
          <Controller
            name={field.name}
            control={control}
            rules={{ required: true }}
            render={(props) => {
              const { field: customField } = props;
              return (
                <>
                  <TextField
                    {...customField}
                    {...field}
                    disabled={!edit[type]}
                    value={customField.value || ""}
                  />
                </>
              )
            }
            }
          />
        )
      case "date":
        return (
          <Controller
            name={field.name}
            control={control}
            rules={{ required: field.required }}
            render={(props) => {
              const { field: customField } = props;
              return (
                <>
                  <DatePicker
                    {...customField}
                    {...field}
                    disabled={!edit[type]}
                    value={customField.value || ""}
                  />
                </>
              )
            }
            }
          />
        )
      case "location":
        return (
          <Controller
            name={field.name}
            control={control}
            rules={{ required: field.required }}
            render={(props) => {
              const { field: customField } = props;
              console.log('customField12321', customField)
              return (
                <>
                  <Box
                    className="show_fields__box"
                    onClick={() => {
                      if (edit[type]) {
                        const options = {
                          enableHighAccuracy: true,
                          timeout: 5000,
                          maximumAge: 0
                        };
                        function success(pos) {
                          const crd = pos.coords;
                          console.log('Your current position is:');
                          console.log(`Latitude : ${crd.latitude}`);
                          console.log(`Longitude: ${crd.longitude}`);
                          customField.onChange({ latitude: crd.latitude, longitude: crd.longitude })
                          console.log(`More or less ${crd.accuracy} meters.`);
                        }

                        function error(err) {
                          console.warn(`ERROR(${err.code}): ${err.message}`);
                        }
                        navigator.geolocation.getCurrentPosition(success, error, options);
                      }

                    }}>

                    <TextField
                      {...field}
                      disabled={!edit[type]}
                      value={Object.values(customField.value || {}).join(',')}
                      inputProps={{
                        style: {
                          height: field.height,
                        },
                      }}
                    />
                    {customField?.value?.latitude && customField?.value?.longitude && (
                      <MapContainer latitude={customField.value.latitude} longitude={customField.value.longitude} />
                    )}
                  </Box>

                </>
              )
            }
            }
          />
        )
      case "multi-inputs":
        return (
          <Controller
            name={field.name}
            control={control}
            rules={{ required: true }}
            render={(props) => {
              const { field: customField } = props;
              console.log("customField.value", customField.value)
              return (
                <>
                  <MultiInput
                    {...customField}
                    {...field}
                    disabled={!edit[type]}
                    value={customField.value || ""}
                  />
                </>
              )
            }
            }
          />
        )
      default:
        return <div>default</div>
    }

  }

  return (
    <div>
      <div className='dashboard_tabs__container'>
        <Tabs
          classes={{
            root: classes.customTabRoot,
            indicator: classes.customTabIndicator
          }}
          value={0} onChange={() => { }} aria-label="basic tabs example">
          <Tab label={<span style={{ color: 'black', fontFamily: 'Poppins' }}>{type}</span>} {...a11yProps(0)} />
        </Tabs>
        {!(props.edit || {})[type] &&
          <Typography
            className={`${edit[type] ? "dashboard_tabs__save" : "dashboard_tabs__edit"}`}
            sx={{
              fontSize: '10px',
              cursor: 'pointer'
            }}
            onClick={(event) => {
              if (!edit[type]) {
                setEdit({ ...edit, [type]: true })
              } else {
                handleSubmit(onSubmit)(event)
              }
            }}
          >
            {edit[type] ? "Save" : "Edit"}
          </Typography>
        }


      </div>

      <TabPanel value={0} index={0}>
        <div className='show_fields__container'>
          {values.map((field, index) => (
            createField(field, index)
          ))}
        </div>
      </TabPanel>
    </div>
  )
}