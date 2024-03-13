import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'counter',
  initialState: {
    value: []
  },
  reducers: {
    filterProduct: (state, action) => {
      state.value = action.payload
    },
  
  }
})

// Action creators are generated for each case reducer function
export const { filterProduct } = productSlice.actions

export default productSlice.reducer