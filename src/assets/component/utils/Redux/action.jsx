import axios from 'axios';

export const SET_EMAIL_OR_MOBILE = "SET_EMAIL_OR_MOBILE";
export const TOGGLE_INPUT_TYPE = "TOGGLE_INPUT_TYPE";
export const SET_ERROR = "SET_ERROR";
export const CLEAR_ERROR = "CLEAR_ERROR";
export const SAVE_USER = "SAVE_USER";
export const SAVE_USER_SUCCESS = "SAVE_USER_SUCCESS";
export const SAVE_USER_ERROR = "SAVE_USER_ERROR";
export const LOGOUT = "LOGOUT";
export const SIGN_IN_USER = "SIGN_IN_USER";
export const SIGN_IN_USER_SUCCESS = "SIGN_IN_USER_SUCCESS";
export const SIGN_IN_USER_ERROR = "SIGN_IN_USER_ERROR";

export const setEmailOrMobile = (payload) => ({
  type: SET_EMAIL_OR_MOBILE,
  payload,
});

export const toggleInputType = () => ({
  type: TOGGLE_INPUT_TYPE,
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});

export const saveUser = (userData) => {
  return async (dispatch) => {
    dispatch({ type: SAVE_USER });
    try {
      const existingUsers = await axios.get("http://localhost:3000/users");
      const userExists = existingUsers.data.some(
        (user) => user.contact === userData.contact
      );
      if (userExists) {
        dispatch({
          type: SAVE_USER_ERROR,
          payload: "User already exists with this email or mobile number.",
        });
        return;
      }

      const res = await axios.post("http://localhost:3000/users", userData);
      dispatch({ type: SAVE_USER_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: SAVE_USER_ERROR, payload: error.message });
    }
  };
};

export const signInUser = (userData) => {
  return async (dispatch) => {
    dispatch({ type: SIGN_IN_USER });
    try {
      const existingUsers = await axios.get("http://localhost:3000/users");
      const userExists = existingUsers.data.some(
        (user) => user.contact === userData.contact
      );

      if (!userExists) {
        dispatch({
          type: SIGN_IN_USER_ERROR,
          payload: "User not found. Please sign up.",
        });
        return;
      }

      dispatch({ type: SIGN_IN_USER_SUCCESS });
    } catch (error) {
      dispatch({ type: SIGN_IN_USER_ERROR, payload: error.message });
    }
  };
};

export const logout = () => ({
  type: LOGOUT,
});
