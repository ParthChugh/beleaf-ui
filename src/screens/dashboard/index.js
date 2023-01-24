import React, { useState } /*, { useContext } */ from 'react';
import Heading from '../../components/heading';
import CustomTabs from '../../components/tabs'
import ShowFields from '../../components/showFields'
import Box from '@mui/material/Box';
// farms
import { masterData } from './master_data'
import { products } from './products'
import { appUsers } from './app_users'
// products
import { general } from './general';
import { cultivation } from './cultivation'

import './DashboardPage.css';
import { useSearchParams, useParams } from 'react-router-dom'




const DashboardPage = () => {
  // const { userState } = useContext(UserContext);
  let params = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(parseInt(searchParams.get('tab') || 0));

  // const isUserLoggedIn = checkIfUserLoggedIn(userState.user.accessToken)
  const getSubData = (value) => {
    switch (params.page_id) {
      case "farms":
        switch (value) {
          case 0:
            const data = masterData({})
            return Object.keys(data).map((type, index) => {
              const values = data[type]
              return (
                <ShowFields
                  key={`dashboard_subheading__${index}`}
                  type={type}
                  values={values}
                />

              )
            })
          case 1:
            const productsTemp = products({})
            return Object.keys(productsTemp).map((type, index) => {
              const values = productsTemp[type]
              return (
                <ShowFields
                  key={`dashboard_subheading__${index}`}
                  type={type}
                  values={values}
                />

              )
            })
          case 2:
            const appUsersTemp = appUsers({})
            return Object.keys(appUsersTemp).map((type, index) => {
              const values = appUsersTemp[type]
              return (
                <ShowFields
                  key={`dashboard_subheading__${index}`}
                  type={type}
                  values={values}
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
            return Object.keys(data).map((type, index) => {
              const values = data[type]
              return (
                <ShowFields
                  key={`dashboard_subheading__${index}`}
                  type={type}
                  values={values}
                />

              )
            })
          case 1:
            const cultivationTemp = cultivation({})
            return Object.keys(cultivationTemp).map((type, index) => {
              const values = cultivationTemp[type]
              return (
                <ShowFields
                  key={`dashboard_subheading__${index}`}
                  type={type}
                  values={values}
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
          subHeading={"Meko Melon (LJBABGR001)"}
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