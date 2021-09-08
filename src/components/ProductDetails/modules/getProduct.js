import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProductById } from '../../../redux/actions'
import { ProductContainer } from './productContainer'
import { Loading } from '../../common/spinner'

export const GetProduct = ({ id }) => {
  const dispatch = useDispatch()
  const product = useSelector(state => state.productDetails)

  useEffect(() => {
    dispatch(getProductById(id))
  }, [dispatch, id])

  return (
    <div>
      {
      !product
        ? <Loading />
        : <ProductContainer product={product} />
      }
    </div>
  )
}
