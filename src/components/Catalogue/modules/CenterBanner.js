import { Image } from 'react-bootstrap'
import bannerProducts from '../../../assets/bannerProducts.jpg'
import { centerBanner } from '../CatalogueStyle'

export const CenterBanner = () => {
  return (
    <Image style={centerBanner} src={bannerProducts} />
  )
}
