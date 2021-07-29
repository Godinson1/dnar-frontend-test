import { setSidebarOpen } from "../slices/dashboard";
import { clearData } from "../index";

export const openSidebar = (dispatch) => dispatch(setSidebarOpen());
export const clearMessage = (dispatch) => dispatch(clearData());
