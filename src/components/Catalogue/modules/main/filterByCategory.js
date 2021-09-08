export const filterByCategory = (options, toFilter) => {
  if (options.category === 'Resultados de la Búsqueda:') {
    return toFilter
  } else {
    return toFilter.filter(product => product.subCategory.category.name === options.category)
  }
}
