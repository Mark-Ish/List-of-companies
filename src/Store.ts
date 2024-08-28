import { configureStore } from "@reduxjs/toolkit"
import boardReducer from "./slice/Slice"
import deleteReducer from "./slice/SliceDelete"

export const store = configureStore({
  reducer: { board: boardReducer, delete: deleteReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
