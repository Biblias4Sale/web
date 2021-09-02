import { SET_LOGGED, GET_CATEGORIES, GET_PRODUCTS} from '../actions/constants'

const initialState = {
  logged: false,
  products: [], 
  categories:[]
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED:
      return { ...state, logged: action.payload}

    case GET_PRODUCTS:
      console.log(action.payload)
      return { ...state, products: action.payload}

    case GET_CATEGORIES:
    return { ...state, categories: action.payload }

    default:
      return state
  }
}

export default rootReducer
