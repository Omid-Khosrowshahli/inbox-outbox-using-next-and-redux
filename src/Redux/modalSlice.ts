import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isModalVisible: false
  },
  reducers: {
    setIsModalVisible: (state: any, action: any): void => {
      state.isModalVisible = action.payload;
    }
  }
});

export const {setIsModalVisible} = modalSlice.actions;

export default modalSlice.reducer;