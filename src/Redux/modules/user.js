import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authType: "",
  isAuthenticated: false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthInfo: (state, action) => {
      const { authType, isAuthenticated } = action.payload;
      state.authType = authType;
      state.isAuthenticated = isAuthenticated;
    },
    
    clearAuthInfo: state => {
      state.authType = "";
      state.isAuthenticated = false;
      window.localStorage.clear();
    }
  }
});

export const { setAuthInfo, clearAuthInfo } = userSlice.actions;
export default userSlice.reducer;
