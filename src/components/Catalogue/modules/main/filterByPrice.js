export const filterByPrice = (options, filtredBySubCategory) => {
  if (options.price === 'all') return filtredBySubCategory
  else if (options.price === '30k') return filtredBySubCategory.filter(product => product.price <= 30000)
  else if (options.price === '30k/250k') return filtredBySubCategory.filter(product => product.price > 30000 && product.price <= 250000)
  else if (options.price === '250k') return filtredBySubCategory.filter(product => product.price > 250000)
}
