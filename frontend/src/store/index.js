import { configureStore } from "@reduxjs/toolkit";

import commonSlice from "./features/common/commonSlice";
import templateSlice from "./features/template/templateSlice";
import assesmentsSlice from "./features/assesments/assesmentSlice";

export const store = configureStore({
  reducer: {
    common: commonSlice,
    template: templateSlice,
    assesments: assesmentsSlice,
  },
});
