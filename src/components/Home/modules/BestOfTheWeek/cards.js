import { Card } from 'react-bootstrap'
import { GetStarts } from '../../../common/getStars'
import { StyleContainer, CardStyle } from '../../HomeStyle'
import { CardBottom } from './cardBotton'

export const Cards = ({ product }) => {
  const productStars = GetStarts(product)
  const price = product.price.toString()
  const formatedPrice = '$' + new Intl.NumberFormat('es-ES').format(price)

  return (
    <Card style={CardStyle}>
      <div style={{ height: '35vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img variant='top' src={product.img} style={{ width: '150px' }} />
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
