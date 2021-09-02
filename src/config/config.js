export const Envoirment = process.env.NODE_ENV

export const ApiURL = Envoirment === 'development' ? 'http://localhost:3001' : 'https://aprendoxd.herokuapp.com'
