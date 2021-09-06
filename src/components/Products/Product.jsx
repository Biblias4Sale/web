import { Card } from 'react-bootstrap'
import { CardStyle, ImgContainer, ProductImg, Stars } from './ProductStyle'

export const Product = ({ name, stars, img, key, price }) => {
  const newPrice = price.toString()
  const formatedPrice = '$' + new Intl.NumberFormat('es-ES').format(newPrice)

  return (
    <Card key={key} style={CardStyle}>
      <div style={ImgContainer}>
        <Card.Img src={img} alt={`Product: ${name}`} style={ProductImg} />
      </div>
      <Card.Body>
        <Card.Title> {name}  </Card.Title>
        <Card.Text>
          {formatedPrice}
        </Card.Text>
        <Card.Text style={Stars}>
          {stars}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
