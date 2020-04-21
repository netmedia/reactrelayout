import { createSlice } from '@reduxjs/toolkit';

let initailStateValues = {
  token: null,
  refreshToken: null,
  tokenExpiry: null,
  user: {},
  isLogging: false,
  isAuthenticated: false,
  isError: false,
  shouldRemember: false
}; 

export const authStateSlice = createSlice({
  name: 'auth',
  initialState: initailStateValues,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = {
        username: action.payload.username,
        password: action.payload.password,
      };
      state.shouldRemember = action.payload.shouldRemember;
    },
    logout: state => {
      state = { ...initailStateValues };
    },
    resetAuthState: state => {
      state = { ...initailStateValues };
    },
  },
});

export const { login, logout, resetAuthState } = authStateSlice.actions;

export const loginAsync = (username, password, shouldRemember) => dispatch => {
  setTimeout(() => {
    dispatch(login({ username: username, 
                     password: password,
                     shouldRemember: shouldRemember }));
  }, 1000);
};

export const logoutAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(logout());
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const isAuthenticatedSelector = state => state.auth.isAuthenticated;

export default authStateSlice.reducer;
