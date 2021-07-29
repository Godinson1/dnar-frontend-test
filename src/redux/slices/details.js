import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCoins: [],
  marketLeaders: [],
  isLoading: false,
  isPaymentLoading: false,
  status: false,
  showBalanceStatus: false,
  error: "",
  success: "",
};

const details = createSlice({
  name: "details",
  initialState: initialState,
  reducers: {
    setAllCoins: (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.allCoins = action.payload;
      return state;
    },
    setMarketLeaders: (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.marketLeaders = action.payload;
      return state;
    },
    setUserSuccess: (state, action) => {
      state.isPaymentLoading = false;
      state.isLoading = false;
      state.success = action.payload;
      return state;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
      return state;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
      return state;
    },
  },
});

export const {
  setAllCoins,
  setMarketLeaders,
  setStatus,
  setUserSuccess,
  setLoading,
} = details.actions;

export default details.reducer;
