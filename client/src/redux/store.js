import { configureStore } from "@reduxjs/toolkit";
import { testReducer } from "./reducers/testReducer";
import { testAPI } from "./api/testApi";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducers = combineReducers({
  [testReducer.name]: testReducer.reducer,
  [testAPI.reducerPath]: testAPI.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (mid) => [...mid(), testAPI.middleware],
});

export const persistor = persistStore(store);
