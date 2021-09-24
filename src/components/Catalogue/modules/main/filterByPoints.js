export const filterByPoints = (options, filtredByPrice) => {
  console.log('options RATING:', options.raiting)
  if (options.raiting.length === 0) return filtredByPrice
  else {
    return filtredByPrice.filter(product => {
      console.log('PRODUCT RATING:', product.rating)
      return options.raiting.includes(product.rating)
    })
  }
}
