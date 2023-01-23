import React, { useContext, useEffect, useState } from 'react';
import { checkIfUserLoggedIn } from '../../global/constants'
import { useCookies } from 'react-cookie';
import './Header.css';
import Avatar from '@mui/material/Avatar';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { UserContext } from '../../contexts/user';

const Header = (props) => {
  const { leftAccessory } = props
  const [cookies, setCookie] = useCookies(['user']);
  const { userState, userDispatch } = useContext(UserContext);
  const isUserLoggedIn = checkIfUserLoggedIn(userState.user.accessToken)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    userDispatch({
      type: 'UPDATE_USER_RESPONSE',
      payload: { accessToken: cookies.accessToken, name: "Jacob Holmes", role: "Manager" },
    });
  }, [cookies.accessToken])
  console.log("userState123213", userState)
  return (
    <div className="header">
      <nav className="header__nav">
        <ul className="header__list">

          <li style={{ display: 'flex', alignItems: 'center' }}>
            {leftAccessory}
            <a className="header__link" href="/">

              <img
                src={require('../../assets/beleaf_Logo.png')}
                loading="lazy"
                className='header__logo'
              />
            </a>
          </li>


          {isUserLoggedIn ?
            <li className='header__logout_container'>
              <FormControl sx={{ m: 1, mr: 4 }}>
                <TextField
                  id="outlined-multiline-flexible"
                  className='header__search_bar'
                  placeholder="Search"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.5 6.75C1.5 3.8505 3.8505 1.5 6.75 1.5C9.6495 1.5 12 3.8505 12 6.75C12 9.6495 9.6495 12 6.75 12C3.8505 12 1.5 9.6495 1.5 6.75ZM6.75 0C3.02208 0 0 3.02208 0 6.75C0 10.4779 3.02208 13.5 6.75 13.5C8.34376 13.5 9.80851 12.9476 10.9633 12.0239L14.4692 15.5299C14.7621 15.8228 15.237 15.8228 15.5299 15.5299C15.8228 15.237 15.8228 14.7621 15.5299 14.4692L12.0239 10.9633C12.9476 9.80851 13.5 8.34376 13.5 6.75C13.5 3.02208 10.4779 0 6.75 0Z" fill="#3F434A" />
                      </svg>
                    </InputAdornment>,
                    style: {
                      height: "50px",
                      borderRadius: 10
                    },
                  }}

                />
              </FormControl>
              <Avatar onClick={handleClick} alt="ML" src={require('../../assets/male.png')} className="header__avatar" />
              <div onClick={handleClick}>
                <div className='header__avatar_heading'>{userState.user.name}</div>
                <div className='header__avatar_heading'>{userState.user.role}</div>
              </div>
              <div onClick={handleClick} style={{ cursor: 'pointer' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.45434 10.1532C7.75792 10.4828 8.24189 10.4828 8.54547 10.1532L11.3621 7.09547C11.8645 6.55006 11.518 5.60039 10.8165 5.60039H5.18327C4.48184 5.60039 4.1353 6.55006 4.6377 7.09547L7.45434 10.1532Z" fill="#3F434A" />
                </svg>
              </div>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={() => {
                  userDispatch({
                    type: 'UPDATE_USER_RESPONSE',
                    payload: {},
                  })
                  setCookie('accessToken', "")

                  handleClose()
                }
                }>Logout</MenuItem>
              </Menu>
            </li>
            :
            <li><a className="header__link" href="/login">Login</a></li>
          }
        </ul>
      </nav>
    </div >
  );
}

export default Header;