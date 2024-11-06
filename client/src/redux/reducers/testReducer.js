import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: true,
};

export const testReducer = createSlice({
  name: "testReducer",
  initialState,
  reducers: {
    userExist: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    userNotExist: (state) => {
      (state.loading = false), (state.user = null);
    },
  },
});

export const { userExist, userNotExist } = testReducer.actions;
