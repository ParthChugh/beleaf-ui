import React, { useState, useContext, useEffect } from 'react';
import Heading from '../../components/heading';
import CustomTabs from '../../components/tabs'
import ShowFields from '../../components/showFields'
import Box from '@mui/material/Box';
// farms
import { masterData } from './master_data'
import { products } from './products'
import { appUsers } from './app_users'
// products
import { UserContext } from '../../contexts/user';
import { general } from './general';
import { cultivation } from './cultivation'

import './DashboardPage.css';
import { useSearchParams, useParams } from 'react-router-dom'


const DashboardPage = () => {
  const { userState, userDispatch } = useContext(UserContext);
  let params = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(parseInt(searchParams.get('tab') || 0));
  const getServerUrl = () => {
    switch (params.page_id) {
      case "farms":
        switch (value) {
          case 0:
            const data = masterData({})
            return data.getServerDetails
          case 1:
            const productsTemp = products({})
            return productsTemp.getServerDetails
          case 2:
            const appUsersTemp = appUsers({})
            return appUsersTemp.getServerDetails
          default:
            return <div>dqwdqwdwq 2</div>
        }
      case "products":
        switch (value) {
          case 0:
            const data = general({})
            return data.getServerDetails
          case 1:
            const cultivationTemp = cultivation({})
            return cultivationTemp.getServerDetails
          default:
            return <div>dqwdqwdwq 2</div>
        }
      case "users":
        return <div>dqwdqwdwq 2 Users</div>
      default:
        return <div>dqwdqwdwq default</div>
    }
  }
  const fetchServerValues = async () => {
    const serverUrl = getServerUrl()
    const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}${serverUrl}${params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const json = await response.json()
    console.log('json12312321', json)
    userDispatch({
      type: 'EDIT_TABLE',
      payload: { [`${serverUrl}${params.id}`]: json },
    });
  }
  useEffect(() => {
    fetchServerValues()
  }, [value])
  // const isUserLoggedIn = checkIfUserLoggedIn(userState.user.accessToken)
  const getSubData = (value) => {
    if (!userState.editTable?.[`${getServerUrl()}${params.id}`]) {
      return <div />
    }
    switch (params.page_id) {
      case "farms":
        switch (value) {
          case 0:
            const data = masterData({})
            return Object.keys(data.fields).map((type, index) => {
              const values = data.fields[type]
              return (
                <ShowFields
                  key={`dashboard_subheading__${index}`}
                  type={type}
                  serverUrl={data.getServerDetails}
                  updateUrl={data.updateServerDetails}
                  getKeyInformation={data.getKeyInformation}
                  values={values}
                  onSubmitCustomField={(params) => {
                    // console.log('qweqweqwe', params)
                  }}
                />

              )
            })
          case 1:
            const productsTemp = products({})
            return Object.keys(productsTemp.fields).map((type, index) => {
              const values = productsTemp.fields[type]
              return (
                <ShowFields
                  key={`dashboard_subheading__${index}`}
                  type={type}
                  values={values}
                  updateUrl={productsTemp?.updateServerDetails}
                  serverUrl={productsTemp.getServerDetails}
                  getKeyInformation={productsTemp.getKeyInformation}
                  onSubmitCustomField={(params) => {
                    // console.log('qweqweqwe', params)
                  }}
                />

              )
            })
          case 2:
            const appUsersTemp = appUsers({})
            return Object.keys(appUsersTemp.fields).map((type, index) => {
              const values = appUsersTemp.fields[type]
              return (
                <ShowFields
                  key={`dashboard_subheading__${index}`}
                  type={type}
                  serverUrl={appUsersTemp.getServerDetails}
                  updateUrl={appUsersTemp.updateServerDetails}
                  getKeyInformation={appUsersTemp.getKeyInformation}
                  values={values}
                  onSubmitCustomField={(params) => {
                    // console.log('qweqweqwe', params)
                  }}
                />

              )
            })
          default:
            return <div>dqwdqwdwq 2</div>
        }
      case "products":
        switch (value) {
          case 0:
            const data = general({})
            return Object.keys(data.fields).map((type, index) => {
              const values = data.fields[type]
              return (
                <ShowFields
                  key={`dashboard_subheading__${index}`}
                  type={type}
                  serverUrl={data.getServerDetails}
                  updateUrl={data.updateServerDetails}
                  getKeyInformation={data.getKeyInformation}
                  values={values}
                  onSubmitCustomField={(params) => {
                    // console.log('qweqweqwe', params)
                  }}
                />

              )
            })
          case 1:
            const cultivationTemp = cultivation({})
            return Object.keys(cultivationTemp.fields).map((type, index) => {
              const values = cultivationTemp.fields[type]
              return (
                <ShowFields
                  key={`dashboard_subheading__${index}`}
                  type={type}
                  serverUrl={cultivationTemp.getServerDetails}
                  updateUrl={cultivationTemp.updateServerDetails}
                  getKeyInformation={cultivationTemp.getKeyInformation}
                  values={values}
                  onSubmitCustomField={(params) => {
                    // console.log('qweqweqwe', params)
                  }}
                />

              )
            })
          default:
            return <div>dqwdqwdwq 2</div>
        }
      case "users":
        return <div>dqwdqwdwq 2 Users</div>
      default:
        return <div>dqwdqwdwq default</div>
    }

  }
  const getTabs = (page_id) => {
    switch (page_id) {
      case "farms":
        return [
          { name: "Master Data" },
          { name: "Products" },
          { name: "App Users" }
        ]

      case "products":
        return [
          { name: "General" },
          { name: "Cultivation" },
        ]
      case "users":
        return [
          { name: "General" },
          { name: "Cultivation" },
        ]
      default:
        return "new default case"
    }


  }
  return (
    <Box className="home-container" sx={{ mt: 3 }}>
      <>
        <Heading
          text={"Administration"}
          subHeading={`${params.id.toUpperCase()}`}
        />
        <CustomTabs
          tabs={getTabs(params.page_id)}
          setValue={(index) => {
            setValue(index)
            setSearchParams({ tab: index });
          }}
          value={value}
          showSubData={getSubData(value)}
        />

      </>
    </Box>
  );
}

export default DashboardPage;