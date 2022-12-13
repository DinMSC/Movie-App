import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import showTypeReducer from "../Reducers/tabs/tabsSlice"
import showListReducer from "../Reducers/shows/showsSlice"

export const store = configureStore({
  reducer: {
    showType: showTypeReducer,
    showList: showListReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
