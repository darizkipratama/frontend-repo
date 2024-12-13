import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}

export interface UserState {
  userData: User[];
  loading: boolean;
  error?: string;
};

const initialUserState : UserState = {
  userData : [],
  loading: false,
  error: ""
};

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async() => {
    const data = await axios.get('http://localhost:3001/api/users',{
      headers : {
        'Authorization': 'Bearer $impleTok3N',
        'Content-Type': 'application/json',
      }
    });

    return data.data;
  }
);

const userSlices = createSlice({
  name: 'users',
  initialState: initialUserState,
  reducers : {
    setUsers: (state:UserState, action) => {
      state.userData = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state:UserState) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchUser.fulfilled, (state:UserState, action) => {
        state.loading = false;
        userSlices.caseReducers.setUsers(state, action);
        console.log(state.userData)
      })
      .addCase(fetchUser.rejected, (state:UserState, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlices.reducer;




// export const updateUser = createAsyncThunk(
//   'user/updateUser',
//   async(userData:User) => {
//     const data = await fetch('/api/user-update', {
//       method: 'PUT',
//       body: userData,
//     });
//   }
// );