import React, { useContext, useState } from 'react';
import Heading from '../../components/heading';
import Tabs from '../../components/tabs'
import { checkIfUserLoggedIn } from '../../global/constants'
import Box from '@mui/material/Box';
import { UserContext } from '../../contexts/user';
import CustomTable from '../../components/customTable'
import farms from './farms'
import products from './products'
import appUsers from './users'
import { useSearchParams } from 'react-router-dom'
import { internalFarm } from './internal_farm'
import { newMitra } from './new_mitra'
import { newProduct } from './new_product'
import './HomePage.css';

const HomePage = () => {
  const { userState } = useContext(UserContext);
  const isUserLoggedIn = checkIfUserLoggedIn(userState.user.accessToken)
  let [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(parseInt(searchParams.get('tab') || 0));
  const getSubData = (value) => {
    switch (value) {
      case 0:
        return (
          <CustomTable
            totalItems={15}
            visibleFields={farms.visibleFields}
            data={{ columns: farms.columns, rows: farms.rows }}
          />
        )
      case 1:
        console.log('products12321', products)
        return (
          <CustomTable
            totalItems={15}
            visibleFields={products.visibleFields}
            data={{ columns: products.columns, rows: products.rows }}
          />
        )
      case 2:
        return (
          <CustomTable
            totalItems={15}
            visibleFields={appUsers.visibleFields}
            data={{ columns: appUsers.columns, rows: appUsers.rows }}
          />
        )
      default:
        return (
          <CustomTable
            totalItems={15}
            visibleFields={appUsers.visibleFields}
            data={{ columns: appUsers.columns, rows: appUsers.rows }}
          />
        )
    }
  }

  const buttons = (value) => {
    switch (value) {
      case 0:
        return [
          {
            text: 'Add New Mitra',
            icon: 'Add',
            color: '#3EB049',
            headingColor: 'white',
            payload: newMitra
          },
          {
            text: 'Add Internal Farm',
            icon: 'Add',
            color: '#10312B',
            headingColor: 'white',
            payload: internalFarm
          }
        ]
      case 1:
        return [
          {
            text: 'Add New Product',
            icon: 'Add',
            color: '#3EB049',
            headingColor: 'white',
            payload: newProduct
          },
        ]
      case 2:
        return [
          {
            text: 'Add New User',
            icon: 'Add',
            color: '#3EB049',
            headingColor: 'white'
          },
        ]
      default:
        return [
          {
            text: 'Add New Mitra',
            icon: 'Add',
            color: '#3EB049',
            headingColor: 'white'
          },
          {
            text: 'Add Internal Farm',
            icon: 'Add',
            color: '#10312B',
            headingColor: 'white'
          }
        ]
    }
  }
  return (
    <Box className="home-container" sx={{ mt: 3 }}>
      {isUserLoggedIn ?
        <>
          <Heading
            text={"Administration"}
            buttons={buttons(value)}
          />
          <Tabs
            tabs={[
              { name: "Farms" },
              { name: "Products" },
              { name: "Users" }
            ]}
            setValue={(index) => {
              setValue(index)
              setSearchParams({ tab: index });
            }}
            value={value}
            showSubData={getSubData(value)}
          />
        </>
        :
        <>
          <div className="home-hero">
            <h1>Welcome to our website</h1>
            <p>We offer the best products and services in the industry.</p>
            <button className="home-button">Learn More</button>
          </div>
          <div className="home-services">
            <h2>Our Services</h2>
            <div className="home-service">
              <h3>Service 1</h3>
              <p>Description of service 1</p>
            </div>
            <div className="home-service">
              <h3>Service 2</h3>
              <p>Description of service 2</p>
            </div>
            <div className="home-service">
              <h3>Service 3</h3>
              <p>Description of service 3</p>
            </div>
          </div>
        </>
      }
    </Box>
  );
}

export default HomePage;