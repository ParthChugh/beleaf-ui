import React, { useEffect, useState, useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import './heading.css'
import Add from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import ShowFields from '../../components/showFields'
import Modal from '@mui/material/Modal';
import { toast } from 'react-toastify';
import CustomTabs from '../../components/tabs'
import { UserContext } from '../../contexts/user';

export default function Heading(props) {
  const { text, buttons = [], subHeading } = props
  const [open, setOpen] = useState({});
  const { userState, userDispatch } = useContext(UserContext);
  const [value, setValue] = useState(0);
  const [sendRequest, setSendRequest] = useState('');
  const handleOpen = (button) => {
    userDispatch({
      type: 'REMOVE_ERROR',
      payload: {},
    });
    userDispatch({
      type: 'REMOVE_DRAFT',
      payload: {},
    });
    setValue(0)
    setOpen(button)
  };
  // console.log('openn----', open)
  const handleClose = () => setOpen({});
  const icons = (text, color) => {
    switch (text) {
      case "Add":
        return <Add style={{ color }} />
      default:
        return <Add style={{ color }} />
    }
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 1227,
    minWidth: "70%",
    minHeight: "70%",
    maxHeight: "80%",
    bgcolor: 'background.paper',
    boxShadow: 24,
    // p: 4,
    overflow: "auto",
    background: 'transparent',
    boxShadow: ""
  };

  // console.log("sendRequest12321", userState.errors)
  const createElement = async (params) => {
    const isFormData = open?.payload?.getServerDetails?.isFormData
    const values = params
    let formdata = null
    let url = open.payload.getServerDetails.url
    if (isFormData) {
      formdata = new FormData();
      Object.keys(values).forEach((key) => {
        const value = values[key];
        console.log("value123123", value)
        formdata.append(key, value?.[0]?.file ? value[0].file : value)
      })
    } else {
      url = url + JSON.parse(localStorage.getItem('fieldJson') || "{}")?.data?.id || ""
    }
    const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}${url}`, {
      method: open.payload.getServerDetails.method ? open.payload.getServerDetails.method : 'POST',
      ...!isFormData && {
        headers: {
          'Content-Type': 'application/json'
        }
      },
      ...open?.payload?.getServerDetails?.headers && {
        headers: {
          ...open.payload.getServerDetails.headers
        }
      },
      body: isFormData ? formdata : JSON.stringify(values)
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
      toast.success("Added", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000)

    }
    setOpen({})
  }

  const updateDetails = async (serverDetails, values, serverValues) => {
    let correctedJson = {}
    if(value === 0) {
      // Object.values(serverValues)[0].forEach(valuesKey => {
      //   let value = values[valuesKey.name]
      //   if (valuesKey.optionUrl) {
      //     const serverValues = userState.serverOptions[valuesKey.optionUrl][valuesKey.optionMainVariable]
      //     value = serverValues.find(el => el[valuesKey.optionVariable] === value)?.id
      //   }
      //   correctedJson[valuesKey.name] = value
      // })
      
      const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}${serverDetails.url}`, {
        method: serverDetails.method || "post",
        headers: {
          'Content-Type': 'application/json',
          "mitra": !!serverDetails.mitra
        },
        body: JSON.stringify(values)
      })
      const json = await response.json()
      if(!json.error) {
        localStorage.setItem('fieldJson', JSON.stringify(json))
        setValue(value + 1)
      } else {
        toast.error(json.error.message, {
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
    } else {
      setValue(value + 1)
    }
    
  }

  useEffect(() => {
    if (sendRequest) {

      const localErrors = []
      if (!Object.values(userState.errors).length) {
        return;
      }
      Object.values(userState.errors).forEach((el) => {
        if (typeof el === "object" || (typeof el === "string" && el !== '')) {
          localErrors.push(el)
        }
      })
      // console.log("localErrors12321", localErrors)
      if (localErrors.length === 0) {
        if (value < (Object.keys(open.payload.tabs || {}).length - 1)) {
          // setValue(value + 1)
          try {
            const serverDetails = open?.payload.serverDetails[Object.keys(open.payload.tabs || {})[value]]
            updateDetails(
              serverDetails, 
              userState.drafts[Object.keys(open.payload.tabs || {})[value]],
              open.payload.tabs[Object.keys(open.payload.tabs || {})[value]]
            )
          } catch(el) {
            setValue(value + 1)
          }
          setSendRequest('')
          return
        }
        let types = {}
        Object.keys(userState.errors).forEach(el => {
          types[el] = null
        })
        userDispatch({
          type: 'REMOVE_ERROR',
          payload: {},
        });
        if (value === (Object.keys(open.payload.tabs || {}).length - 1) && Object.keys(userState.drafts).includes(Object.keys(open.payload.tabs || {})[value])) {
          setSendRequest('')
          if(open.text.includes('Product')) {
            let correctedJson = {}
            const tabs = Object.values(open.payload.tabs)[0]

            Object.keys(tabs).forEach((key) => {
              correctedJson[key] = {}
              const tabValues = tabs[key];
              const values = userState.drafts[key];
              tabValues.map(valuesKey => {
                let value = values[valuesKey.name]
                if (valuesKey.optionUrl) {
                  const serverValues = userState.serverOptions[valuesKey.optionUrl][valuesKey.optionMainVariable]
                  value = serverValues.find(el => el[valuesKey.optionVariable] === value)?.id
                }
                correctedJson[key][valuesKey.name] = value
              })
            })
            createElement(Object.values(correctedJson)[0])
            console.log('correctedJson123123', correctedJson)
            // setOpen({})
          } else {
            let newCorrectedJson = {}
            const getKeyInformation = open.payload.getKeyInformation
            newCorrectedJson["products"] = {}
            newCorrectedJson[getKeyInformation.typeInfo] = {}
            Object.values(userState.drafts).forEach((draft) => {
              if(Object.keys(draft).length > 1) {
                Object.keys(draft).forEach((el) => {
                  if(el === "location") {
                    if(typeof draft["location"] === 'string') {
                      newCorrectedJson["lat"] = draft["location"].split(',')[0]
                      newCorrectedJson["long"] = draft["location"].split(',')[1]
                    } else {
                      newCorrectedJson["lat"] = draft["location"]["latitude"]
                      newCorrectedJson["long"] = draft["location"]["longitude"]
                    } 
                  }else {
                    newCorrectedJson[el] = draft[el]
                  }
                })
              } else if(Object.keys(draft).includes('Hydroponics') || Object.keys(draft).includes('Open Field') || Object.keys(draft).includes('Soilless')) {
                Object.keys(draft).forEach((key) => {
                  let keyName = ''
                  keyName = userState.serverOptions?.[getKeyInformation.url]?.[getKeyInformation.optionMainVariable].find(el => el[getKeyInformation.optionVariable] === key)?.id
                  newCorrectedJson[getKeyInformation.typeInfo][keyName] = draft[key]
                })
              } else if(Object.keys(draft).includes('historic_yield') || Object.keys(draft).includes('contracted_products')) {
                Object.keys(draft).forEach((key) => {
                  newCorrectedJson["products"][key] = draft[key]
                })
              }
              
            })
            delete newCorrectedJson['farm_name']
            createElement(newCorrectedJson)
          }
        } else {
          setSendRequest('')
        }
      } else {
        setSendRequest('')
      }
    }
  }, [JSON.stringify(userState.errors), sendRequest, userState.drafts])

  const getSubData = (payload) => {
    if (Object.values(payload)[value].length === 0) {
      return <div />
    }
    const data = Object.values(payload)[value]
    return Object.keys(data).map((type, index) => {
      const values = data[type]
      return (
        <ShowFields
          key={`dashboard_subheading__${index}`}
          edit={{ [type]: true }}
          type={type}
          sendRequest={sendRequest}
          values={values}
          setSendRequest={setSendRequest}
          goToNextPage={() => setValue(value + 1)}
          onSubmitCustomField={(params) => {
            // console.log('qweqweqwe', params)
          }}
          value={Object.keys(data).length - 1}
          index={index}
        />
      )
    })
  }


  return (
    <div className='heading__container'>
      <Modal
        open={Object.values(open).length > 0}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {Object.values(open).length > 0 &&
            <CustomTabs
              tabs={Object.keys(open.payload.tabs || {}).map(el => ({ name: el }))}
              setValue={() => { }}
              value={value}
              hideSearch={true}
              showSubData={
                <Box>
                  <Typography
                    sx={{
                      fontFamily: 'Poppins',
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: "32px",
                      lineHeight: "48px",
                    }}
                  >
                    {open.payload.title[Object.keys(open.payload.tabs || {})[value]]}
                  </Typography>
                  {getSubData(open.payload.tabs)}
                </Box>
              }
              showRoutingButton
              showBackButton={value !== 0}
              showSubmitButton={Object.keys(open.payload.tabs || {}).length - 1 === value}
              changeRoute={(route) => {
                if (route == 'back') {
                  setValue(value - 1)
                } else {
                  setSendRequest(Math.random().toString(36).slice(2))
                }
              }}
              onSubmit={() => {
                // console.log("onSubmit123213")
                setSendRequest(Math.random().toString(36).slice(2))
              }}
              showNextButton={value !== (Object.keys(open.payload.tabs || {}).length - 1)}
            />
          }
        </Box>
      </Modal>
      <div className='heading__text_container'>
        <div className='heading__text'>{text}</div>
        {subHeading && <div className='heading__subheading'>&nbsp;/&nbsp;{subHeading}</div>}
      </div>
      <Box className='heading__buttons' sx={{ mr: 2 }}>
        {buttons.map((button, index) => (
          <IconButton
            key={`heading__text_${index}`}
            sx={{
              background: button.color,
              borderRadius: 2,
              marginLeft: 1,
              "&:hover": { color: "green" }
            }}
            onClick={() => handleOpen(button)}
          >
            {icons(button.icon, button.headingColor)}
            <Typography sx={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              // fontWeight: 600,
              fontSize: '16px',
              lineHeight: '24px',
              color: button.headingColor,
              "&.MuiButtonBase-root:hover": {
                bgcolor: "transparent"
              }
            }}
            >
              {button.text}
            </Typography>
          </IconButton>
        ))}
      </Box>

    </div>
  )
}