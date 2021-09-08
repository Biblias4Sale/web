import { BannerBox } from './modules/banner'
import { GetProduct } from './modules/getProduct'
import { ProductReviewView } from './ProductReviews/ProductReviewView'

export const ProductDetailsView = ({ match }) => {
  return (
    <div>
      <div>
        <BannerBox />
        <GetProduct id={match} />
      </div>
      <div>
        <ProductReviewView />
      </div>
    </div>
  )
}
