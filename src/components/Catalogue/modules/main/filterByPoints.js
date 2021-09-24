export const filterByPoints = (options, filtredByPrice) => {
  if (options.raiting.length === 0) return filtredByPrice
  else {
    return filtredByPrice.filter(product => {
      return options.raiting.includes(product.rating)
    })
  }
}
