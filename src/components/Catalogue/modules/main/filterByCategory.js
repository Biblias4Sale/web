export const filterByCategory = (options, toFilter) => {
  if (!options.category) {
    return toFilter
  } else {
    return toFilter.filter(product => product.subCategory.category.name === options.category)
  }
}
