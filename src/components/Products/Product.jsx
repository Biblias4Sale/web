import { Card } from 'react-bootstrap'
import { productImg } from './ProductStyle'
// import Camaras from '../../assets/camaras.jpg'

export const Product = ({ name, stars, img, key, price }) => {
  const newPrice = price.toString()
  const formatedPrice = '$' + new Intl.NumberFormat('es-ES').format(newPrice)

  return (
    <Card key={key} style={{ width: '20vw', height: '55vh', display: 'flex', marginTop: '20px' }}>
      <div style={{ width: '20vw', height: '35vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card.Img src={img} alt='No encontrada' style={productImg} />
      </div>
      <Card.Body>
        <Card.Title> {name}  </Card.Title>
        <Card.Text style={{ color: 'black' }}>
          {formatedPrice}
        </Card.Text>
        <Card.Text style={{ color: 'orange' }}>
          {stars}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
