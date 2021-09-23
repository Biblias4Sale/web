const { NODE_ENV } = process.env

export const ApiURL = NODE_ENV === 'development' ? 'http://localhost:3002' : 'https://noiloan.herokuapp.com'

export const url = {
    local: 'http://localhost:3001/api/v1/login/google',
    production: 'https://noiloan.herokuapp.com/api/v1/login/google'
  }