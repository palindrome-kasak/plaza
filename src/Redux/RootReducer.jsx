import { combineReducers } from "redux";
import userReducer from "./authReducer";

import shoppingReducer from "./Shopping/ShoppingReducer";

const rootReducer = combineReducers({
  shop: shoppingReducer,
  user: userReducer,
});

export default rootReducer;
