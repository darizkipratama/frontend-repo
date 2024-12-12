import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface User {
  id: number;
  name: string;
  email: string;
}

export interface userState {
  userData: User[];
  loading: boolean;
  error?: string;
};

const userSlices = createSlice({
  name: 'users',
  initialState : {
    userData: [],
    loading: false,
    error: "",
  },
  reducers : {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state:userState) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchUser.fulfilled, (state:userState, action) => {
        state.loading = false;
        // state.userData.push();
      })
      .addCase(fetchUser.rejected, (state:userState, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});


export default userSlices.reducer;


export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async() => {
    const data = await fetch('/api/user-fetch');
    console.log(data);
    return data;
  }
);

// export const updateUser = createAsyncThunk(
//   'user/updateUser',
//   async(userData:User) => {
//     const data = await fetch('/api/user-update', {
//       method: 'PUT',
//       body: userData,
//     });
//   }
// );