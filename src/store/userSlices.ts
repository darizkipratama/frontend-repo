import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: null,
  loading: false,
  error: null,
};

const userSlices = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userProcess: (state) => {
      state.loading = true;
      state.error = null;
    },
    userSuccess: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    },
    userFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    userClear: (state) => {
      state.userData = null;
    },
  },
});

export const { userProcess, userSuccess, userFailure, userClear } = userSlices.actions;
export default userSlices.reducer;
