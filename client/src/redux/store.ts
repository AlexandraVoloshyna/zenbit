import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./api.slice";
import authReducer from "./auth.slice"
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: false,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch