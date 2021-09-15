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
  REMOVE_PRODUCT_FROM_CART,
  ADD_PRODUCT_TO_SAVED,
  SUBTRACT_QTY_FROM_CART,
  REMOVE_PRODUCT_FROM_SAVED,
  ADD_PRODUCT_TO_FAVORITES,
  REMOVE_PRODUCT_FROM_FAVORITES,
  SUBTRACT_QTY_FROM_SAVED
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
  },
  favorites: []
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

    case ADD_PRODUCT_TO_FAVORITES:
      if (state.favorites.find(product => product.id === action.payload.id)) {
        return { ...state, favorites: state.favorites }
      } else {
        return { ...state, favorites: state.favorites.concat(action.payload) }
      }

    case REMOVE_PRODUCT_FROM_FAVORITES:
      return { ...state, favorites: state.favorites.filter(elem => elem.id !== action.payload) }
    case SUBTRACT_QTY_FROM_SAVED:
      state.cart.saved.forEach(product => {
        if (product.id === action.payload) {
          if (product.qty > 1) {
            product.qty--
          }
        }
      })
      return { ...state, cart: { ...state.cart, saved: state.cart.saved } }

// case QTY_CHOOSE_FROM_CART:
//   state.cart.main.forEach(product => {
//     if (product.id === action.payload.id) {
//       if (product.qty > 1) {
//         product.qty = action.payload.qty
//       }
//     }
//   })
//   return { ...state, cart: { ...state.cart, saved: state.cart.main } }

default:
  return state
}
}

export default rootReducer
