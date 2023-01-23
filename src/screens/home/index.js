import React, { useContext, useState } from 'react';
import Heading from '../../components/heading';
import Tabs from '../../components/tabs'
import { checkIfUserLoggedIn } from '../../global/constants'
import Box from '@mui/material/Box';
import { UserContext } from '../../contexts/user';
import CustomTable from '../../components/customTable'
import Link from '@mui/material/Link'
import './HomePage.css';

const HomePage = () => {
  const { userState } = useContext(UserContext);
  const isUserLoggedIn = checkIfUserLoggedIn(userState.user.accessToken)
  const [value, setValue] = useState(0)
  const getSubData = (value) => {
    switch (value) {
      case 0:
        return (<CustomTable
          totalItems={15}
          visibleFields={['FARM ID', 'FARM NAME', 'FARM CONTACT', 'FARM TYPE', 'PROVINCE', 'DISTRICT', 'RELATION', 'FUNCTION']}
          data={{
            columns: [
              {
                field: "id",
                headerName: "FARM ID",
                width: 150,
                align: 'center',
                headerAlign: "center",
                renderCell: (params) => (
                  <Link className='tabs_cell__link' href={`/dashboard/${params.id}`}>
                    {params.id}
                  </Link>
                ),
              },
              {
                field: "name",
                headerName: "FARM NAME",
                width: 150,
                align: 'center',
                headerAlign: "center"
              },
              {
                field: "contact",
                headerName: "FARM CONTACT",
                width: 200,
                align: 'center',
                headerAlign: "center"
              },
              {
                field: "type",
                headerName: "FARM TYPE",
                width: 150,
                align: 'center',
                headerAlign: "center"
              },
              {
                field: "province",
                headerName: "PROVINCE",
                width: 150,
                align: 'center',
                headerAlign: "center"
              },
              {
                field: "district",
                headerName: "DISTRICT",
                width: 150,
                align: 'center',
                headerAlign: "center"
              },
              {
                field: "relation",
                headerName: "RELATION",
                width: 150,
                align: 'center',
                headerAlign: "center"
              },
              {
                field: "function",
                headerName: "FUNCTION",
                width: 150,
                align: 'center',
                headerAlign: "center"
              },
            ],
            rows: [
              {
                id: "LJBABGR001",
                name: "Kapesh Farm",
                contact: "Neal Matthews",
                type: "water,crop,sun",
                province: "West Java",
                district: "Semplak",
                relation: "Mitra",
                function: "Producer"
              },
              {
                id: "LJBABGR001",
                name: "Kapesh Farm",
                contact: "Neal Matthews",
                type: "water,crop,sun",
                province: "West Java",
                district: "Semplak",
                relation: "Mitra",
                function: "Producer"
              },
              {
                id: "LJBABGR001",
                name: "Kapesh Farm",
                contact: "Neal Matthews",
                type: "water,crop,sun",
                province: "West Java",
                district: "Semplak",
                relation: "Mitra",
                function: "Producer"
              },
            ]
          }}
        />)
      case 1:
        return <div>dqwdqwdwq</div>
      case 2:
        return <div>dqwdqwdwq 2</div>
      default:
        return <div>dqwdqwdwq 2</div>
    }
  }
  return (
    <Box className="home-container" sx={{ mt: 3 }}>
      {isUserLoggedIn ?
        <>
          <Heading
            text={"Administration"}
            buttons={[
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
            ]}
          />
          <Tabs
            tabs={[
              { name: "Farms" },
              { name: "Products" },
              { name: "Users" }
            ]}
            setValue={setValue}
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
        </>}


    </Box>
  );
}

export default HomePage;