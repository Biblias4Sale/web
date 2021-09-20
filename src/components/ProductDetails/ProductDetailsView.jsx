import { BannerBox } from './modules/banner'
// import { GetProduct } from './modules/getProduct'
import { ProductReviewView } from './ProductReviews/ProductReviewView'
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
        <ProductReviewView />
      </div>
    </div>
  )
}
