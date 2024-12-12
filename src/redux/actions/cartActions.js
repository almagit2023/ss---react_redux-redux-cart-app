export const addProduct = (product) => {
  return {
    type: 'ADD_PRODUCT',
    payload: product
  }
}

export const removeProduct = (id) => {
  return {
    type: 'REMOVE_PRODUCT',
    payload: id
  }
}

export const incrementProduct = (id) => {
  return {
    type: 'INCREMENT_PRODUCT',
    payload: id
  }
}


export const decrementProduct = (id) => {
  return {
    type: 'DECREMENT_PRODUCT',
    payload: id
  }
}