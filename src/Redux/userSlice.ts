import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userList: [{userName: 'admin', password: 'admin', isAdmin: true}],
    currentUser: {}
  },
  reducers: {
    currentUserUpdate: (state: any, action: any) => {
      state.currentUser = action.payload;
    },
    addUser: (state: any, action: any) => {
      if (state.userList.some((item: any) => item.userName === action.payload.userName)) {
        return;
      }

      state.userList.push(action.payload);
    }
  }
});

export const { currentUserUpdate, addUser } = userSlice.actions;

export default userSlice.reducer;