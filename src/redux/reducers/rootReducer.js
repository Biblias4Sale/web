import {
  SET_LOGGED,
  GET_CATEGORIES,
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  DELETE_DETAILS,
  CREATE_USER,
  LOG_OUT,
  SET_SEARCH_RESULT,
  GET_REVIEWS,
  SET_SEARCH_STRING,
  ADD_CART
} from '../actions/constants'

const initialState = {
  logged: false,
  products: [],
  productDetails: [],
  categories: [],
  reviews: [],
  searchResult: [],
  searchString: '',
  cart: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED:
      return { ...state, logged: action.payload }

    case LOG_OUT:
      return { ...state, logged: false }

    case CREATE_USER:
      return { ...state, logged: action.payload }

    case GET_PRODUCTS:
      return { ...state, products: action.payload }

    case GET_PRODUCT_BY_ID:
      return { ...state, productDetails: action.payload }

    case DELETE_DETAILS:
      return { ...state, productDetails: [] }

    case GET_CATEGORIES:
      return { ...state, categories: action.payload }

    case GET_REVIEWS:
      return { ...state, reviews: action.payload }

    case SET_SEARCH_RESULT:
      return { ...state, searchResult: action.payload }

    case SET_SEARCH_STRING:
      return { ...state, searchString: action.payload }

    case ADD_CART:
      console.log(action.payload.id)
      const productoRepetido = state.cart.find(product => product.id === action.payload.id)
      console.log(productoRepetido)

      return { ...state, cart: state.cart.concat(action.payload) }
    default:
      return state
  }
}

export default rootReducer
