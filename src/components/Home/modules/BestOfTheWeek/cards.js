import { Card } from 'react-bootstrap'
import { GetStarts } from '../../../common/getStars'
import { StyleContainer, CardStyle } from '../../HomeStyle'
import { CardBottom } from './cardBotton'

export const Cards = ({ product }) => {
  const productStars = GetStarts(product)

  return (
    <Card style={CardStyle}>
      <Card.Img variant='top' src='https://www.headchile.com/media/catalog/product/cache/7151efb52db8e605104a54f6f8b7286a/1/0/107563_expedition_tweed_negro_iso_1_2.jpg' />
      <Card.Body>
        <Card.Title style={StyleContainer}>{product.name}</Card.Title>
        <Card.Text style={StyleContainer}> $3200 </Card.Text>
        <CardBottom stars={productStars} product={product} />
      </Card.Body>
    </Card>
  )
}
