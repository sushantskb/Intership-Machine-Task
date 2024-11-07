import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  loading: true,
};

export const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    userExist: (state, action) => {
      (state.loading = false), (state.token = action.payload);
    },
    userNotExist: (state) => {
      (state.loading = false), (state.token = null);
    },
  },
});
export const { userExist, userNotExist } = userReducer.actions;