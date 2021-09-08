import { ProductCards } from '../../../common/productCard'

export const MapProduct = ({ product }) => {
  return (
    <div className='d-flex justify-content-around flex-row flex-wrap'>
      {product?.map((obj) => {
        return (
          <ProductCards product={obj} height='55%' imgWidth='85%' key={obj.id} />
        )
      })}
    </div>
  )
}
