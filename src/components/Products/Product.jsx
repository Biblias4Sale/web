import { Card } from 'react-bootstrap'
import { productImg, productDetail, productTitle, productDetail2 } from './ProductStyle'
// import Camaras from '../../assets/camaras.jpg'

export const Product = ({ name, stars, img, key }) => {
  return (
    <Card key={key} style={{ width: '20vw', height: '48vh', display: 'flex', marginTop: '20px' }}>
      <div style={{ width: '20vw', height: '35vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card.Img src={img} alt='No encontrada' style={productImg} />
      </div>
      <Card.Body>
        <Card.Title> {name}  </Card.Title>
        <Card.Text style={{ color: 'orange' }}>
          {stars}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
