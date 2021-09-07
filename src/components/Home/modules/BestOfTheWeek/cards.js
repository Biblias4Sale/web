import { Card, Image } from 'react-bootstrap'
import { GetStarts } from '../../../common/getStars'
import { StyleContainer, CardStyle, CardImage, ImageWidth } from '../../HomeStyle'
import { CardBottom } from './cardBotton'

export const Cards = ({ product }) => {
  const productStars = GetStarts(product)
  const price = product.price.toString()
  const formatedPrice = '$' + new Intl.NumberFormat('es-ES').format(price)

  return (
    <Card style={CardStyle}>
      <div style={CardImage}>
        <Image variant='top' src={product.img} style={ImageWidth} />
      </div>
      <Card.Body>
        <Card.Title style={StyleContainer}>{product.brand + ' ' + product.model}</Card.Title>
        <Card.Text style={StyleContainer}> {formatedPrice} </Card.Text>
      </Card.Body>
      <Card.Footer>
        <CardBottom stars={productStars} product={product} />
      </Card.Footer>
    </Card>
  )
}
