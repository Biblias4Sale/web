import { Image } from 'react-bootstrap'
import Banner from '../../../assets/bannerDetails.jpg'
import { BannerStyle } from '../ProductDetailsStyle'

export const BannerBox = () => {
  return (
    <div style={BannerStyle}>
      <Image src={Banner} alt='Banner Product Details' fluid />
    </div>
  )
}
