export const filterByCategory = (options, toFilter) => {
  if (!options.category) {
    return toFilter
  } else {
    return toFilter.filter(product => product.category === options.category)
  }
}
