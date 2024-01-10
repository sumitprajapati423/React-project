export const CartReducer = (state, action) =>{
    switch(action.type){
        case "ADD_TO_CART":
        return{...state, Cart: [...state.Cart, { ...action.payload, qty:1 }]};
        case "REMOVE_Cart":
            return{
               ...state,
               Cart: state.Cart.filter((c) => c.id !== action.payload.id),
            };
            case 'CHANGE_CART_QYT':
                return {...state,Cart:state.Cart.filter((c)=>c.id===action.payload.id?(c.qty=action.payload.qty): c.qty)}
        
        default:
            return state;
    }
}

export const productReducer = (state, action)=> {
    switch (action.type){
        case "SORT_BY_PRICE":
            return{...state, sort: action.payload};
        case "Filter_BY_STOCK":
            return {...state, byStock: !state.byStock};
        case "Filter_BY_DELIVERY":
             return {...state,byFastDelivery : !state.byFastDelivery};
        case "Filter_BY_RATING":
            return {...state, byRating: action.payload};
        case "Filter_BY_SEARCH":
            return {...state, searchQuery: action.payload};
        case "CLEAR_FILTERS":
         return{
            byStock: false,
            byFastDelivery: false,
            byRating:0,
            searchQuery: "",
        }

        default:
            return state;
    }
};
