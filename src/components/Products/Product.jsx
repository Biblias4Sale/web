import { productImg, productDetail, productTitle, productDetail2 } from './ProductStyle'
import Camaras from '../../assets/camaras.jpg'

export const Product = ({ name, points }) => {
  return (
    <div>
      <div style={productTitle}><a href><img src={Camaras} alt='No encontrada' style={productImg} /></a>
        <div style={productDetail}>
          <h6><a href>{name}</a></h6>
        </div>
        <div style={productDetail2}>
          <span>{points}</span>
        </div>
      </div>
    </div>
  )
}
