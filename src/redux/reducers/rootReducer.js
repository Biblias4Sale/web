import { SET_LOGGED, GET_CATEGORIES, GET_PRODUCTS, GET_PRODUCT_BY_ID, CREATE_USER } from '../actions/constants'

const initialState = {
  logged: false,
  products: [],
  productDetails: [],
  categories: [],
  newUser: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED:
      return { ...state, logged: action.payload }

    case CREATE_USER:
      return { ...state, newUser: action.payload }

    case GET_PRODUCTS:
      return { ...state, products: action.payload }

    case GET_PRODUCT_BY_ID:

      return { ...state, productDetails: action.payload.data }

    case GET_CATEGORIES:
      return { ...state, categories: action.payload }

    default:
      return state
  }
}

export default rootReducer
