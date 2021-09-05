import { BannerBox } from './modules/banner'
import { GetProduct } from './modules/getProduct'

export const ProductDetailsView = ({ match }) => {
  return (
    <div>
      <BannerBox />
      <GetProduct id={match} />
    </div>
  )
}
