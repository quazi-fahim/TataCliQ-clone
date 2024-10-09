import {
    CLEAR_ERROR,
    LOGOUT,
    SAVE_USER,
    SAVE_USER_SUCCESS,
    SAVE_USER_ERROR,
    SET_EMAIL_OR_MOBILE,
    SET_ERROR,
    SIGN_IN_USER,
    SIGN_IN_USER_SUCCESS,
    SIGN_IN_USER_ERROR,
    TOGGLE_INPUT_TYPE,
  } from './action';
  
  const initialState = {
    emailOrMobile: '',
    isEmail: true,
    loading: false,
    error: null,
    saveUser: false,
    isLoggedIn: false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_EMAIL_OR_MOBILE:
        return {
          ...state,
          emailOrMobile: action.payload,
        };
      case TOGGLE_INPUT_TYPE:
        return {
          ...state,
          isEmail: !state.isEmail,
        };
      case SET_ERROR:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      case CLEAR_ERROR:
        return {
          ...state,
          error: null,
        };
      case SAVE_USER:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case SAVE_USER_SUCCESS:
        return {
          ...state,
          saveUser: true,
          loading: false,
          isLoggedIn: true,
        };
      case SAVE_USER_ERROR:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      case SIGN_IN_USER:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case SIGN_IN_USER_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          loading: false,
        };
      case SIGN_IN_USER_ERROR:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      case LOGOUT:
        return {
          ...initialState,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  