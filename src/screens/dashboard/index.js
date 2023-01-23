import React, { useState } /*, { useContext } */ from 'react';
import Heading from '../../components/heading';
import CustomTabs from '../../components/tabs'
import ShowFields from '../../components/showFields'
import Box from '@mui/material/Box';
import { masterData } from './master_data'
import { products } from './products'
import './DashboardPage.css';



const DashboardPage = () => {
  // const { userState } = useContext(UserContext);
  const [value, setValue] = useState(0);


  // const isUserLoggedIn = checkIfUserLoggedIn(userState.user.accessToken)
  const getSubData = (value) => {
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
              key={`dashboard_subheading__products_${index}`}
              type={type}
              values={values}
            />

          )
        })
      case 2:
        return <div>dqwdqwdwq 2</div>
      default:
        return <div>dqwdqwdwq 2</div>
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
          tabs={[
            { name: "Master Data" },
            { name: "Products" },
            { name: "App Users" }
          ]}
          setValue={setValue}
          value={value}
          showSubData={getSubData(value)}
        />

      </>
    </Box>
  );
}

export default DashboardPage;