const initialState = {
  logged: false,
  products: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BEST_LESSONS':
      return { ...state, bestLessons: action.payload }

    case 'GET_CATEGORIES':
      return { ...state, categories: action.payload }

    default:
      return state
  }
}

export default rootReducer
