import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    category: [],
    menus: [],
    selectedCategory: {},
}

const categoryUrl = "https://www.themealdb.com/api/json/v1/1/categories.php"

export const getCategory = createAsyncThunk("getCategory", async () => {
    const response = await axios.get(categoryUrl);
    return response.data.categories
})

const menuUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c="

export const getMenu = createAsyncThunk("getMenu", async (_, { getState }) => {
    const state = getState();
    const selectedCategory = state.menu.selectedCategory;
    const response = await axios.get(`${menuUrl}${selectedCategory.strCategory}`);
    return response.data.meals
})

export const MenuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getCategory.fulfilled, (state, action) => {
            state.category = action.payload
        })

        builder.addCase(getMenu.fulfilled, (state, action) => {
            state.menus = action.payload
        })
    },

})

export const { setSelectedCategory } = MenuSlice.actions

export default MenuSlice.reducer