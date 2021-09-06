import { Card, Image } from 'react-bootstrap'
import { GetStarts } from '../../../common/getStars'
import { StyleContainer, CardStyle, CardImage, ImageWidth, FooterStyle } from '../../HomeStyle'
import { CardBottom } from './cardBottom'

export const Cards = ({ product }) => {
  const productStars = GetStarts(product)
  const price = product.price.toString()
  const formatedPrice = '$' + new Intl.NumberFormat('es-ES').format(price)

  return (
    <Card style={CardStyle}>
      <div style={CardImage}>
        <Image variant='top' src={product.img} style={ImageWidth} />
      </div>
      <Card.Body style={{ fontWeight: 'bolder' }}>
        <Card.Text style={StyleContainer}>{product.brand + ' ' + product.model}</Card.Text>
        <Card.Text style={StyleContainer}> {formatedPrice} </Card.Text>
      </Card.Body>
      <Card.Footer style={FooterStyle}>
        <CardBottom stars={productStars} product={product} />
      </Card.Footer>
    </Card>
  )
}
