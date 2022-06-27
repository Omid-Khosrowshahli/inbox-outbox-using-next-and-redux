import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: 'messages',
  initialState: {
    messageList: [{}]
  },
  reducers: {
    AddToMessageList: (state: any, action: any): void => {
      state.messageList.push(action.payload);
    }
  }
});

export const { AddToMessageList } = messageSlice.actions;

export default messageSlice.reducer;