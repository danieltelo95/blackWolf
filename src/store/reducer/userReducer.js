import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  role: null,
};

const userslice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.role = action.payload.role;
    },
    clearUser: (state) => {
      state.user = null;
      state.role = null;
    }
  }
})

export const { setUser, clearUser } = userslice.actions;

export default userslice.reducer;