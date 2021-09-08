import { Image } from 'react-bootstrap'
import bannerProducts from '../../../../assets/bannerProducts.jpg'

export const CenterBanner = () => {
  return (
    <Image className='mt-5 mb-5' src={bannerProducts} fluid />
  )
}
