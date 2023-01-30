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
import { toast } from 'react-toastify';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MapContainer from './map';
import { useParams } from 'react-router-dom'
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
  const { type, values, onSubmitCustomField, serverUrl, updateUrl, getKeyInformation } = props
  const [edit, setEdit] = useState(props.edit || {})
  const { userState, userDispatch } = useContext(UserContext);
  let urlParams = useParams();
  const classes = useStyles();
  let defaultValues = {}
  values.forEach((value) => {
    defaultValues[value.name] = userState.drafts?.[type]?.[value.name] || value.value
  })
  const [tempDefaultValues, setDefaultValues] = useState(defaultValues || {})
  // let serverData = JSON.parse(userState.editTable[`${serverUrl}${urlParams.id}`] || "{}")
  const { control, handleSubmit, formState, reset, watch } = useForm({
    defaultValues
  });
  // // console.log("defaultValues12321", serverData)

  const fetchDataServer = async () => {
    let json = {}
    // if (Object.values(serverData?.data || {}).length === 0) {
    const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}${serverUrl}${urlParams.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    json = await response.json()
    // userDispatch({
    //   type: 'EDIT_TABLE',
    //   payload: { [`${serverUrl}${urlParams.id}`]: JSON.stringify(json) },
    // });
    // } else {
    //   json = serverData
    // }


    if (json?.data?.data?.[0]) {
      const serverValues = json?.data?.data?.[0]
      if (serverValues) {
        values.forEach((value) => {
          defaultValues[value.name] = value?.serverVaraible ? serverValues?.[value?.serverVaraible]?.[value.optionVariable] : serverValues[value.name]
        })
        reset(defaultValues)
        setDefaultValues(defaultValues)
      }
    } else if (Object.values(json?.data).length > 0) {
      let defaultValues = {}
      values.forEach((value) => {
        if (value.type === 'multi-inputs') {
          const serverValues = Object.values(json?.data)
          const type = (serverValues.find(el => el.farm_type_name === value.name)).cultivation_info
          defaultValues[value.name] = []
          type.forEach((serverValue) => {
            let tempValues = {}
            value.rows.forEach((row) => {
              tempValues[row.name] = row?.serverVaraible ? serverValue?.[row?.serverVaraible]?.[row.optionVariable] : serverValue[row.name]
            })
            defaultValues[value.name].push(tempValues)
          })
        } else {
          const serverValues = json?.data
          defaultValues[value.name] = value?.serverVaraible ? serverValues?.[value?.serverVaraible]?.[value.optionVariable] : serverValues[value.name]
        }
      })
      // console.log("123213tempDefaultValues12321", defaultValues)
      reset(JSON.parse(JSON.stringify(defaultValues)))
      setDefaultValues(defaultValues)
    }
  }

  useEffect(() => {
    // console.log("serverUrl123123", serverUrl)
    if (serverUrl) {
      fetchDataServer()
    } else {
      values.forEach((value) => {
        defaultValues[value.name] = userState.drafts?.[type]?.[value.name] || value.value
      })
      reset(defaultValues)
      setDefaultValues(defaultValues)
    }
  }, [serverUrl])

  useEffect(() => {
    reset(defaultValues)
    setDefaultValues(defaultValues)
  }, [JSON.stringify(defaultValues || {})])

  useEffect(() => {
    if (props.sendRequest) {
      handleSubmit(onSendReq)()
    }
  }, [props.sendRequest])

  useEffect(() => {
    if (Object.values(formState.errors).length > 0) {
      userDispatch({
        type: 'UPDATE_ERROR',
        payload: { [type]: formState.errors },
      });
    }
  }, [JSON.stringify(formState.errors || {})])

  // console.log('userState12321', userState)
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

  const updateServerDetails = async (params) => {
    const isFormData = updateUrl.isFormData
  
    let formdata = null
    let correctedValues = {}
    if (isFormData) {
      formdata = new FormData();
      Object.keys(params).forEach((key) => {
        const value = params[key];
        if(JSON.stringify(value) !== JSON.stringify(tempDefaultValues[key])) {
          formdata.append(key, value?.[0]?.file ? value[0].file : value)
        }
      })
    } else {
      values.forEach((value) => {
        if (value.type === 'multi-inputs') {
          const serverValues = params[type]
          let keyName = ''
          if(getKeyInformation) {
            keyName = userState.serverOptions?.[getKeyInformation.url]?.[getKeyInformation.optionMainVariable].find(el => el[getKeyInformation.optionVariable] === type).id
          }
          correctedValues[keyName || value.name] = []
          serverValues.forEach((serverValue) => {
            let tempValues = {}
            value.rows.forEach((row) => {
              if(serverValue[row.name] === "true" || serverValue[row.name] === "false") {
                tempValues[row.name] = serverValue[row.name] === "true"
              }else {
                tempValues[row.name] = row?.optionVariable ? userState.serverOptions?.[row.optionUrl]?.[row.optionMainVariable].find(el => el[row.optionVariable] === serverValue[row.name]).id : serverValue[row.name]
              }
              
            })
            correctedValues[keyName || value.name].push(tempValues)
          })
        } else {
          const serverValues = params[type]
          let keyName = ''
          if(getKeyInformation) {
            keyName = userState.serverOptions?.[getKeyInformation.url]?.[getKeyInformation.optionMainVariable].find(el => el[getKeyInformation.optionVariable] === type).id
          }
          correctedValues[keyName || value.name] = value?.serverVaraible ? serverValues?.[value?.serverVaraible]?.[value.optionVariable] : serverValues[value.name]
        }
      })
    }
    console.log("correctedValues123213", correctedValues)
    const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}${updateUrl.url}${urlParams.id}`, {
      method: 'PUT',
      ...!isFormData && {
        headers: {
          'Content-Type': 'application/json'
        }
      },
      body: isFormData ? formdata : JSON.stringify(correctedValues)
    })
    let json = await response.json()
    if (json.error) {
      toast.error(json.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.success(json.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    setEdit({ ...edit, [type]: false })
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
      updateServerDetails(params)

    } catch (el) {
      console.log('el213123', el)
      // setEdit({ ...edit, [type]: false })
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
              // console.log('props123123', props)
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
              // console.log('props123123', props)
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
              // console.log('props123123', props)
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
              // console.log('customField12321', customField)
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
                          // console.log('Your current position is:');
                          // console.log(`Latitude : ${crd.latitude}`);
                          // console.log(`Longitude: ${crd.longitude}`);
                          customField.onChange({ latitude: crd.latitude, longitude: crd.longitude })
                          // console.log(`More or less ${crd.accuracy} meters.`);
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