import { api } from "../../Setup";
import { setAllCoins, setMarketLeaders, setLoading } from "../index";
import store from "../store";

export const getCoinMarkets = async () => {
  try {
    const res = await api.get(
      `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`
    );
    if (res) {
      store.dispatch(setMarketLeaders(res.data));
      store.dispatch(setLoading(false));
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllCoinsAndSymbol = async () => {
  try {
    const res = await api.get("/coins/list");
    if (res) {
      store.dispatch(setAllCoins(res.data));
      store.dispatch(setLoading(false));
    }
  } catch (error) {
    console.log(error);
  }
};
