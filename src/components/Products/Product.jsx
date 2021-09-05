import { productImg, productDetail, productTitle, productDetail2 } from './ProductStyle'
// import Camaras from '../../assets/camaras.jpg'

export const Product = ({ name, stars, img, key }) => {
  return (
    <div key={key}>
      <div style={productTitle}><a href><img src={img} alt='No encontrada' style={productImg} /></a>
        <div style={productDetail}>
          <h6><a href>{name}</a></h6>
        </div>
        <div style={productDetail2}>
          <span>{stars}</span>
        </div>
      </div>
    </div>
  )
}
