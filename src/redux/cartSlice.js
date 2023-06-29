import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
    let cart = localStorage.getItem("cart");
    if(cart) {
        return JSON.parse(localStorage.getItem("cart"));
    } else {
        return [];
    }
};

const storeInLocalStorage = (data) => {
    localStorage.setItem("cart", JSON.stringify(data));
}

const initialState = {
    carts: fetchFromLocalStorage(),
    itemCount: 0,
    totalAmount: 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isItemInCart = state.carts.find(item => item.id === action.payload.id);
            
            if(isItemInCart) {
                const tempCart = state.carts.map(item => {
                    if(item.id === action.payload.id) {
                        let tempQty = item.quantity + action.payload.quantity;
                        let tempTotalPrice = tempQty + item.price;
                        return { ...item, quantity: tempQty, totalPrice: tempTotalPrice };
                    } else {
                        return item;
                    }
                })
                state.carts = tempCart;
                storeInLocalStorage(state.carts);
            } else {
                state.carts.push(action.payload);
                storeInLocalStorage(state.carts);
            }

        },
        removeFromCart: (state, action) => {
            const tempCart = state.carts.filter(item => item.id !== action.payload.id);
            state.carts = tempCart;
            storeInLocalStorage(state.carts);
        },
        clearFromCart: (state) => {
            state.carts = [];
            storeInLocalStorage(state.carts);
        }, 
        getCartTotal: (state) => {
            state.totalAmount = state.carts.reduce((cartTotal, cartItem) => cartTotal += cartItem.totalPrice, 0);
            state.itemCount = state.carts.length
        }
    }
});

export const { addToCart, removeFromCart, clearFromCart, getCartTotal } = cartSlice.actions;
export default cartSlice.reducer;

//storeInLocalStorage foknsiyonunda dışarında vermiş olduğumuz verileri kaydediyoruz
//localStorage a
//bir ürün cart'a eklendiyse aynı ürünü tekrar cart a ekleyemezsin, ancak sayısını
//arttırırsın