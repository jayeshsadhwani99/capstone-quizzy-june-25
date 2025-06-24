import { createSlice } from "@reduxjs/toolkit";
import { commomIntialState } from "./initialState";
import * as Actions from "./actions";

export * from "./selectors";

const commonSlice = createSlice({
  name: "teacher-common",
  initialState: commomIntialState,
  reducers: {
    toggleSidebar: Actions.toggleSidebarAction,
  },
});

export const { toggleSidebar } = commonSlice.actions;

export default commonSlice.reducer;
