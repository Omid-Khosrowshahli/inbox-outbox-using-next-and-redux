import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import messageSlice from "./messageSlice";
import modalSlice from "./modalSlice";

export default configureStore({
    reducer: {
    user: userSlice,
    messages: messageSlice,
    modal: modalSlice
  }}
);