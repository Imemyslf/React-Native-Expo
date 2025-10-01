import { configureStore } from "@reduxjs/toolkit";

import favouriteReducer from "./favourites";

const store = configureStore({
  reducer: {
    favouriteMeal: favouriteReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
