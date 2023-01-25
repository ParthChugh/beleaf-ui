import React, { useReducer, createContext } from 'react';

const initialState = {
  user: {},
  isLoggedIn: false,
  loginType: '',
  drafts: {},
  errors: {}
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_USER_RESPONSE':
      return {
        ...state,
        user: action.payload,
      };
    case 'UPDATE_DATA':
      return {
        ...state,
        drafts: { ...state.drafts, ...action.payload },
      };
    case 'REMOVE_DRAFT':
      return {
        ...state,
        drafts: {  },
      };
    case 'UPDATE_ERROR':
      console.log("{ ...state.errors, ...action.payload }", { ...state.errors, ...action.payload })
      return {
        ...state,
        errors: { ...state.errors, ...action.payload },
      };
    case 'REMOVE_ERROR':
      return {
        ...state,
        errors: {},
      };
    case 'LOGIN_TYPE':
      return {
        ...state,
        loginType: action.payload,
      };
    default:
      return state;
  }
};

const UserContext = createContext(initialState);

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={{ userState: state, userDispatch: dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
