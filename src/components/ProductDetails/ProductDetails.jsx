import { ProductDetailsView } from './ProductDetailsView'

export const ProductDetails = (props) => {
  const productId = props.match.params.id

  return (
    <>
      <ProductDetailsView match={productId} />
    </>
  )
}
