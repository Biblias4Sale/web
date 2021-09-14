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
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART
} from '../actions/constants'

const initialState = {
  logged: false,
  products: [],
  productDetails: [],
  categories: [],
  reviews: [],
  searchResult: [],
  searchString: '',
  cart: {
    main: [],
    saved: []
  }
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

    case ADD_PRODUCT_TO_CART:
      const productoRepetido = state.cart.main.find(product => product.id === action.payload.id)
      if (productoRepetido) {
        productoRepetido.qty = productoRepetido.qty + 1
        return {
          ...state,
          cart: {
            ...state.cart,
            main: [...state.cart.main
              .filter(product => product.id !== action.payload.id)
              .concat(productoRepetido)]
          }
        }
      } else {
        return { ...state, cart: { ...state.cart, main: state.cart.main.concat(action.payload) } }
      }

    case REMOVE_PRODUCT_FROM_CART:
      return { ...state, cart: { ...state.cart, main: state.cart.main.filter(elem => elem.id !== action.payload) } }

    default:
      return state
  }
}

export default rootReducer
