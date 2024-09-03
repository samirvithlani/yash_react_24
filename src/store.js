import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/cartSlice";
import bankSlice from "./redux/bankSlice";
import storage from "redux-persist/lib/storage";
import counterSlice from "./redux/counterSlice";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  cart: cartReducer,
  bank: bankSlice,
  counter: counterSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // reducer:{
  //     cart:cartReducer,
  //     bank:bankSlice
  // }
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
