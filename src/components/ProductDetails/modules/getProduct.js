import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProductById } from '../../../redux/actions'
import { ProductContainer } from './productContainer'

export const GetProduct = (id) => {
  const dispatch = useDispatch()
  const product = useSelector(state => state.productDetails[0])

  useEffect(() => {
    dispatch(getProductById(id))
  }, [dispatch])

  return (
    <div>
      {
      !product.id
        ? <h2> Loading... </h2>
        : <ProductContainer product={product} />
      }
    </div>
  )
}