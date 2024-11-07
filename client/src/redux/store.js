import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authAPI } from "./api/authApi";
import { userReducer } from "./reducers/userReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducers = combineReducers({
  [userReducer.name]: userReducer.reducer,
  [authAPI.reducerPath]: authAPI.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (mid) => [...mid(), authAPI.middleware],
});

export const persistor = persistStore(store);
