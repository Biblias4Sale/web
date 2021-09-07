export const FormatedPrice = (product) => {
  const price = product.price.toString()
  const formatedPrice = '$' + new Intl.NumberFormat('es-ES').format(price)

  return formatedPrice
}
