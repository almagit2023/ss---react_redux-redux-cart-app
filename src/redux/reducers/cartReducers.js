const initialState = {
  cart: []
}


const productReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_PRODUCT':
      const productExists = state.cart.find(product => product.id === action.payload.id);
      if (productExists) {
        return {
          ...state,
          cart: state.cart.map((product) =>
            product.id === action.payload.id ? { ...product, count: product.count + 1 } : product
          )
        }
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, count: 1 }]
      }

    case 'REMOVE_PRODUCT':
      return {
        ...state, cart: state.cart.filter((product) => product.id !== action.payload)
      }

    case 'INCREMENT_PRODUCT':
      return {
        ...state, cart: state.cart.map((product) => product.id === action.payload ? { ...product, count: product.count + 1 } : product)
      }

    case 'DECREMENT_PRODUCT':
      return {
        ...state, cart: state.cart.map((product) => product.id === action.payload && product.count > 1 ? { ...product, count: product.count - 1 } : product)
      }

    default:
      return state
  }

}

export default productReducer;