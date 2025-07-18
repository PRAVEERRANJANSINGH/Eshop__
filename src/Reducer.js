// here we define the application level states and also defines aciton to make the changes in the state

export const initialState = {
  basket: [],
}
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};
export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      // Logic to add item to basket
      return {
        ...state, //returns th e current state
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_FROM_BASKET':
      // Logic to remove item from basket
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.id}) as it's not in the basket!`);
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }

}
export default reducer;
