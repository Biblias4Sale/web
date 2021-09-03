import { GetProducts } from './getProducts'

export const BestProducts = () => {
  const allProducts = GetProducts()

  return allProducts.sort((a, b) => { return b.points - a.points }).slice(0, 6)
}
