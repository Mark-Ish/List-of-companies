import { createSlice } from "@reduxjs/toolkit"

const initialState = { clicked: false }

const SliceDelete = createSlice({
  name: "delete",
  initialState,
  reducers: {
    clickedDelete: (state) => {
      state.clicked = !state.clicked
    },
  },
})

export const { clickedDelete } = SliceDelete.actions
export default SliceDelete.reducer
