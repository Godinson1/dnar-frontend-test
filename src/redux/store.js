import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dashboardReducer from "./slices/dashboard";
import detailsReducer from "./slices/details";

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  details: detailsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "production" ? false : true,
});

export default store;
