import { BannerBox } from './modules/banner'
import { GetProduct } from './modules/getProduct'
import { GetReview } from './ProductReviews/modules/getReview'

export const ProductDetailsView = ({ match }) => {
  return (
    <div>
      <BannerBox />
      <GetProduct id={match} />
      <GetReview />
    </div>
  )
}
