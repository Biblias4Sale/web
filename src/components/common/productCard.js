import { Card, Image } from 'react-bootstrap'
import { CardStyle } from './styles/cardsStyles'
import { CardBottom } from './cardBottom'
import { FormatedPrice } from './formatedPrice'
import { GetStarts } from './getStars'

export const ProductCards = ({ product, height, imgWidth }) => {
  const formatedPrice = FormatedPrice(product)
  const productStars = GetStarts(product)

  return (
    <Card style={CardStyle}>
      <div className='d-flex justify-content-center align-items-center ' style={{ height: height }}>
        <Image variant='top' src={product.img} style={{ height: imgWidth }} fluid />
      </div>
      <Card.Body className='fw-bolder'>
        <Card.Text className='d-flex justify-content-center'>{product.brand + ' ' + product.model}</Card.Text>
        <Card.Text className='d-flex justify-content-center'> {formatedPrice} </Card.Text>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-around align-items-center'>
        <CardBottom stars={productStars} product={product} />
      </Card.Footer>
    </Card>
  )
}
