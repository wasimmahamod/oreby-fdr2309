import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: localStorage.getItem("productCart")
    ? JSON.parse(localStorage.getItem("productCart"))
    : [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    Allproducts: (state, action) => {
      let findindex = state.product.findIndex(
        (item) => item.id == action.payload.id
      );
      console.log(findindex);
      if (findindex == -1) {
        state.product = [...state.product, action.payload];
        localStorage.setItem("productCart", JSON.stringify(state.product));
      } else {
        state.product[findindex].qun++;
        localStorage.setItem("productCart", JSON.stringify(state.product));
      }
    },

    removeProduct: (state, action) => {
      state.product.splice(action.payload.id, 1);
      localStorage.setItem("productCart", JSON.stringify(state.product));
    },
    quntityUpdate: (state, action) => {
      console.log(action.payload);
      if (action.payload.act == "pl") {
        state.product[action.payload.id].qun++;
        localStorage.setItem("productCart", JSON.stringify(state.product));
      } else {
        state.product[action.payload.id].qun--;
        localStorage.setItem("productCart", JSON.stringify(state.product));
      }
    },
  },
});
export const { Allproducts, removeProduct, quntityUpdate } =
  productSlice.actions;

export default productSlice.reducer;
