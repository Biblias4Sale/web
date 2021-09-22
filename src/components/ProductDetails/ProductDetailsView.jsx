import { BannerBox } from './modules/banner'
import { ProductReview } from './ProductReviews/ProductReview'
import { ProductContainer } from './modules/productContainer'
import { Loading } from '../common/spinner'

export const ProductDetailsView = ({ product }) => {
  return (
    <div>
      <div>
        <BannerBox />
        <div>
          {
      !product
        ? <Loading />
        : <ProductContainer product={product} />
      }
        </div>
      </div>
      <div>
        <ProductReview product={product} />
      </div>
    </div>
  )
}
