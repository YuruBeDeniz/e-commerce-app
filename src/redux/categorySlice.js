import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: []
};

export const getCategories = createAsyncThunk("category", async() => {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const data = response.json();
    return data;
});

const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
            })
    }
});

export default categorySlice.reducer; 


//APIdan çekeceğimiz için reducers: {} kısmı boş kalacak; onun yerine extraReducers

//With Redux it is now possible to store state where any component in an application
//can access it, without having to pass in variables from component to component

//redux has 3 components: state, action & reducer. 
//State is where you keep your variables and what you define your variables to be initially (count = 0)
//Action is what our react components call, when they want something to happen to a variable 
//(increment, decrement). Ex: if we have a button that increments the count, we'll have that
//button call and increment action
//Reducer is the actual reducer and does something based on the action that is called
//whenever we call that increment action we want it to increment that count that we 
//have in our state by one