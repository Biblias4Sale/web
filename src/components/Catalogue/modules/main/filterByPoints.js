export const filterByPoints = (options, filtredByPrice) => {
  if (options.raiting.length === 0) return filtredByPrice
  else return filtredByPrice.filter(product => options.raiting.includes(product.points))
}
