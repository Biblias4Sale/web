import { SET_LOGGED, GET_CATEGORIES, GET_PRODUCTS, GET_PRODUCT_BY_ID, CREATE_USER, LOG_OUT, GET_REVIEWS, EDIT_USER } from '../actions/constants'

const initialState = {
  logged: false,
  products: [],
  productDetails: [],
  categories: [],
  reviews: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED:

      return { ...state, logged: action.payload }

    case LOG_OUT:

      return { ...state, logged: false }

    case CREATE_USER:
      return { ...state, logged: action.payload }

    case EDIT_USER:
      return { ...state, logged: action.payload }

    case GET_PRODUCTS:

      return { ...state, products: action.payload }

    case GET_PRODUCT_BY_ID:

      return { ...state, productDetails: action.payload }

    case GET_CATEGORIES:
      return { ...state, categories: action.payload }

    case GET_REVIEWS:
      return { ...state, reviews: action.payload }
    default:
      return state
  }
}

export default rootReducer
