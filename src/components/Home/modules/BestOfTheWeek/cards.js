import { Card } from 'react-bootstrap'
import { GetStarts } from '../../../common/getStars'
import { StyleContainer, CardStyle } from '../../HomeStyle'
import { CardBottom } from './cardBotton'

export const Cards = ({ product }) => {
  const productStars = GetStarts(product)

  return (
    <Card style={CardStyle}>
      <Card.Img variant='top' src={product.img} />
      <Card.Body>
        <Card.Title style={StyleContainer}>{product.brand + ' ' + product.model}</Card.Title>
        <Card.Text style={StyleContainer}> {product.price} </Card.Text>
        <CardBottom stars={productStars} product={product} />
      </Card.Body>
    </Card>
  )
}
