import { createSlice } from '@reduxjs/toolkit';



export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    loggin: (state, action) => {
      state.user = action.payload;
    },
    loggout: (state) => {
      state.user = null;
    }
  },
  
  
});

export const { loggin, loggout } = userSlice.actions;


export const selectUser = (state) => state.user.user;



export default userSlice.reducer;
