import { GetReview } from './modules/getReview'

export const ProductReviewView = ({ product }) => {
  return (
    <div>
      <GetReview product={product} />
    </div>
  )
}
