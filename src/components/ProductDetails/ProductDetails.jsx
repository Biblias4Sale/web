import { ProductDetailsView } from './ProductDetailsView'

const ProductDetails = (props) => {
  const productId = props.match.params.id

  return (
    <>
      <ProductDetailsView match={productId} />
    </>
  )
}

export default ProductDetails
