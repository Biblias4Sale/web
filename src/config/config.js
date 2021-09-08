export const Envoirment = process.env.NODE_ENV

<<<<<<< HEAD
export const ApiURL = Envoirment === 'development' ? 'http://localhost:3002' : 'https://noiloan.herokuapp.com'

//export const ApiURL = 'https://noiloan.herokuapp.com'
=======
export const ApiURL = Envoirment === 'development' ? 'http://localhost:3001' : 'https://noiloan.herokuapp.com'

// export const ApiURL = 'https://noiloan.herokuapp.com'
>>>>>>> e0d7a88f87c008785cf09be31fef7d029aae0f68
