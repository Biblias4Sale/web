const Envoirment = process.env.NODE_ENV
const ServerHost = process.env.SERVER_HOST

export const ApiURL = Envoirment === 'development' ? `http://localhost:${ServerHost}` : 'https://noiloan.herokuapp.com'
