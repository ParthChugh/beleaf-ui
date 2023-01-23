import * as React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import './Tabs.css'

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function BasicTabs(props) {
  const { tabs, showSubData, setValue, value } = props;
  return (
    <Box sx={{ ml: 3, mr: 3 }}>
      <Tabs
        selectedIndex={value}
        onSelect={(selectedIndex) => setValue(selectedIndex)}
        selectedTabClassName="tabs--tab--selected"
        selectedTabPanelClassName="tabs--tab-panel--selected"
      >
        <TabList className="tabs--tab-list">{
          tabs.map((tab, index) =>
            <Tab className="tabs--tab" key={`tab-${index}`}>
              <div className='tabs--tab-name'>
                {tab.name}
              </div>

            </Tab>
          )}
        </TabList>
        {tabs.map((tab, index) => (
          <TabPanel key={`tab-panel-${index}`} className="tabs--tab-panel" index={index} value={index}>
            <Box className="tab-panel__box">
              <TextField
                id="outlined-multiline-flexible"
                className='header__search_bar'
                placeholder="Search"
                fullWidth
                InputProps={{
                  startAdornment: <InputAdornment position="start">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M1.5 6.75C1.5 3.8505 3.8505 1.5 6.75 1.5C9.6495 1.5 12 3.8505 12 6.75C12 9.6495 9.6495 12 6.75 12C3.8505 12 1.5 9.6495 1.5 6.75ZM6.75 0C3.02208 0 0 3.02208 0 6.75C0 10.4779 3.02208 13.5 6.75 13.5C8.34376 13.5 9.80851 12.9476 10.9633 12.0239L14.4692 15.5299C14.7621 15.8228 15.237 15.8228 15.5299 15.5299C15.8228 15.237 15.8228 14.7621 15.5299 14.4692L12.0239 10.9633C12.9476 9.80851 13.5 8.34376 13.5 6.75C13.5 3.02208 10.4779 0 6.75 0Z" fill="#3F434A" />
                    </svg>
                  </InputAdornment>,
                  style: {
                    height: "50px",
                    borderRadius: 10,
                    background: '#E8E9EB',
                  },
                }}
              />
              <IconButton
                sx={{
                  background: "#10312B",
                  borderRadius: 2,
                  marginLeft: 1,
                  "&:hover": { color: "green" },
                  width: 135,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: 'white',
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "transparent"
                    }
                  }}
                >
                  Search
                </Typography>
              </IconButton>
            </Box>
            {showSubData}
          </TabPanel>
        ))}
      </Tabs>
    </Box>
  );
}