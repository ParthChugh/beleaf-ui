import React, { useEffect, useState } from 'react'
import Select from './select';
import { useForm, Controller } from "react-hook-form";
import Box from '@mui/material/Box';
import './ShowFields.css'
import TextField from './textField';
import DatePicker from './date';
import MultiInput from './multiInput';
import AttachImage from './attachImage'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MapContainer from './map';

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
  const { type, values } = props
  const [edit, setEdit] = useState({})
  const classes = useStyles();
  // console.log('props21321', props)
  const defaultValues = {}
  values.forEach((value) => {
    defaultValues[value.name] = value.value
  })
  const { control, handleSubmit, formState, reset } = useForm({
    defaultValues
  });

  useEffect(() => {
    reset(defaultValues)
  }, [JSON.stringify(defaultValues || {})])
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
        alert('Please add all the details')
        return;
      }
      setEdit({ ...edit, [type]: false })
    } catch (el) {
      setEdit({ ...edit, [type]: false })
    }

  }
  console.log('errors12312', formState)

  const createField = (field, index) => {
    switch (field.type) {
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
                      console.log('wdqwdwqd')
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