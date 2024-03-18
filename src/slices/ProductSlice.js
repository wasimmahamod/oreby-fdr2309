import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: [],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    Allproducts: (state, action) => {
      state.product = action.payload

    }
  },
})
export const { Allproducts } = productSlice.actions

export default productSlice.reducer