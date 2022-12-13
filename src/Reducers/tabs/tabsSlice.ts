import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import SHOW_TYPE from "../../enums/showType"

export interface TabState {
  status: string
}

const initialState: TabState = {
  status: SHOW_TYPE.MOVIE,
}

export const showType = createSlice({
  name: "showTypeTab",
  initialState,
  reducers: {
    setShowType: (state, action: PayloadAction<string>) => {
      state.status = action.payload
    },
  },
})

export const { setShowType } = showType.actions

export default showType.reducer
