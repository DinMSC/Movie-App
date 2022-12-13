import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import SHOW_TYPE from "../../enums/showType"
import { ShowInterface } from "../../interface/movie"

export interface ShowListState {
  movies: ShowInterface[]
  tv: ShowInterface[]
}

const initialState: ShowListState = {
  movies: [],
  tv: [],
}

export const showList = createSlice({
  name: "updateShowList",
  initialState,
  reducers: {
    updateShowList: (state, action: PayloadAction<any>) => {
      switch (action.payload.type) {
        case SHOW_TYPE.MOVIE:
          state.movies = action.payload.shows
          break
        case SHOW_TYPE.TV:
          state.tv = action.payload.shows
          break
        default:
          break
      }
    },
  },
})

export const { updateShowList } = showList.actions

export default showList.reducer
