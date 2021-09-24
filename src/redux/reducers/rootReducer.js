import {
  SET_LOGGED,
  GET_CATEGORIES,
  GET_PRODUCTS,
  LOG_OUT,
  SET_SEARCH_RESULT,
  SET_SEARCH_STRING,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  ADD_PRODUCT_TO_SAVED,
  SUBTRACT_QTY_FROM_CART,
  REMOVE_PRODUCT_FROM_SAVED,
  SUBTRACT_QTY_FROM_SAVED,
  GET_FAVORITES,
  GET_CART,
  GET_SAVED,
  CLEAN_GUEST_CART
} from '../actions/constants'

const initialState = {
  logged: false,
  products: [],
  categories: [],
  searchResult: [],
  searchString: '',
  favorites: [],
  cart: {
    main: [],
    saved: []
  },
  userCart: [],
  userSaved: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED:
      return { ...state, logged: action.payload }

    case LOG_OUT:
      return { ...state, logged: false, favorites: [], userCart: [] }

    case GET_PRODUCTS:
      return { ...state, products: action.payload }

    case GET_CATEGORIES:
      return { ...state, categories: action.payload }

    case SET_SEARCH_RESULT:
      return { ...state, searchResult: action.payload }

    case SET_SEARCH_STRING:
      return { ...state, searchString: action.payload }

    case ADD_PRODUCT_TO_CART:
      if (state.cart.main.find(product => product.id === action.payload.id)) {
        state.cart.main.map(product => {
          if (product.id === action.payload.id) {
            product.qty++
          } return null
        })
        return { ...state, cart: { ...state.cart, main: state.cart.main } }
      } else {
        return { ...state, cart: { ...state.cart, main: state.cart.main.concat(action.payload) } }
      }

    case REMOVE_PRODUCT_FROM_CART:
      return { ...state, cart: { ...state.cart, main: state.cart.main.filter(elem => elem.id !== action.payload) } }

    case REMOVE_PRODUCT_FROM_SAVED:
      return { ...state, cart: { ...state.cart, saved: state.cart.saved.filter(elem => elem.id !== action.payload) } }

    case ADD_PRODUCT_TO_SAVED:
      if (state.cart.saved.find(product => product.id === action.payload.id)) {
        state.cart.saved.map(product => {
          if (product.id === action.payload.id) {
            product.qty++
          } return null
        })
        return { ...state, cart: { ...state.cart, saved: state.cart.saved } }
      } else {
        return { ...state, cart: { ...state.cart, saved: state.cart.saved.concat(action.payload) } }
      }

    case SUBTRACT_QTY_FROM_CART:
      state.cart.main.forEach(product => {
        if (product.id === action.payload) {
          if (product.qty > 1) {
            product.qty--
          }
        }
      })
      return { ...state, cart: { ...state.cart, main: state.cart.main } }

    case SUBTRACT_QTY_FROM_SAVED:
      state.cart.saved.forEach(product => {
        if (product.id === action.payload) {
          if (product.qty > 1) {
            product.qty--
          }
        }
      })
      return { ...state, cart: { ...state.cart, saved: state.cart.saved } }

    case GET_FAVORITES:
      return { ...state, favorites: action.payload }

    case GET_CART :
      return { ...state, userCart: action.payload }

    case GET_SAVED :
      return { ...state, userSaved: action.payload }

    case CLEAN_GUEST_CART:
      return { ...state, cart: { ...state.cart, main: [], saved: [] } }

    default:
      return state
  }
}

export default rootReducer
