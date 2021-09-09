export const Envoirment = process.env.NODE_ENV

<<<<<<< Updated upstream
export const ApiURL = Envoirment === 'development' ? 'http://localhost:3001' : 'https://noiloan.herokuapp.com'
=======
export const ApiURL = Envoirment === 'development' ? 'http://localhost:3002' : 'https://noiloan.herokuapp.com'
>>>>>>> Stashed changes
//export const ApiURL = 'https://noiloan.herokuapp.com'
