import { createSlice } from "@reduxjs/toolkit";

interface FavouritesTypes {
  ids: string[];
}

const initialState: FavouritesTypes = {
  ids: [],
};

const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      console.log(action.payload.id);
      state.ids.push(action.payload.id);
    },
    removeFavourite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
