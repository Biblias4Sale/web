export const filterBySubCategory = (options, filtredByCategory) => {
  if (options.subCategory.length === 0) {
    return filtredByCategory
  } else {
    return filtredByCategory.filter(product => options.subCategory.includes(product.subCategory))
  }
}
