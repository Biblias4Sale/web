import { ProductDetailsView } from './ProductDetailsView'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ApiURL } from '../../config/config'

const ProductDetails = (props) => {
  const productId = props.match.params.id

  const [detailedProduct, setDetailedProduct] = useState('')

  useEffect(() => {
    const getDetails = async () => {
      const response = await axios.get(`${ApiURL}/products/detail/${productId}`)
      setDetailedProduct(response.data)
      console.log('DETALLE DE PRODUCTO', response.data)
    }
    getDetails()
  }, [productId])

  return (
    <>
      <ProductDetailsView product={detailedProduct} />
    </>
  )
}

export default ProductDetails
