import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    isMenuActive: (state, action) => {
      state.isActive = action.payload;
      console.log("isActive", action.payload);
    }
  }
}
);

export const { isMenuActive } = menuSlice.actions;

export default menuSlice.reducer;
