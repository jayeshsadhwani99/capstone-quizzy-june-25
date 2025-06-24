import { configureStore } from "@reduxjs/toolkit";

import commonSlice from "./features/common/commonSlice";

export const store = configureStore({
  reducer: {
    common: commonSlice,
  },
});
