import { setSidebarOpen, clearData } from "./slices/dashboard";
import store from "./store";
import { clearMessage } from "./actions/dashboard";
import {
  setAllCoins,
  setMarketLeaders,
  setStatus,
  setUserSuccess,
  setLoading,
  setMarketLeadersLoading,
  setAllCoinsLoading,
} from "./slices/details";
import { getAllCoinsAndSymbol, getCoinMarkets } from "./actions/details";
export {
  store,
  clearData,
  setSidebarOpen,
  setAllCoins,
  setMarketLeaders,
  setStatus,
  setUserSuccess,
  clearMessage,
  setLoading,
  getAllCoinsAndSymbol,
  getCoinMarkets,
  setMarketLeadersLoading,
  setAllCoinsLoading,
};
