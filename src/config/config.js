export const Envoirment = process.env.NODE_ENV

export const ApiURL = Envoirment === 'development' ? 'http://localhost:3001' : 'https://noiloan.herokuapp.com'

// export const ApiURL = 'https://noiloan.herokuapp.com' // para usar el server deployado estando en desarrollo
