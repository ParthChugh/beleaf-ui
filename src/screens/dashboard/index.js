import React, { useState } /*, { useContext } */ from 'react';
import Heading from '../../components/heading';
import CustomTabs from '../../components/tabs'
import ShowFields from '../../components/showFields'
import Box from '@mui/material/Box';
import { masterData } from './master_data'
import './DashboardPage.css';



const DashboardPage = () => {
  // const { userState } = useContext(UserContext);
  const data = masterData({})

  // const isUserLoggedIn = checkIfUserLoggedIn(userState.user.accessToken)
  return (
    <Box className="home-container" sx={{ mt: 3 }}>
      <>
        <Heading
          text={"Administration"}
          subHeading={"Meko Melon (LJBABGR001)"}
        />
        <CustomTabs
          tabs={[
            { name: "Master Data" },
            { name: "Products" },
            { name: "App Users" }
          ]}

          showSubData={Object.keys(data).map((type, index) => {
            const values = data[type]
            return (
              <ShowFields
                key={`dashboard_subheading__${index}`}
                type={type}
                values={values}
              />

            )
          })}
        />

      </>
    </Box>
  );
}

export default DashboardPage;