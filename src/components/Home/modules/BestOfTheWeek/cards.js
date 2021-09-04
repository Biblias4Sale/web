import { Card } from 'react-bootstrap'

export const Cards = (props) => {
  return (
    <Card style={{ width: '80%', marginBottom: '35px' }}>
      <Card.Img variant='top' src='https://www.headchile.com/media/catalog/product/cache/7151efb52db8e605104a54f6f8b7286a/1/0/107563_expedition_tweed_negro_iso_1_2.jpg' />
      <Card.Body>
        <Card.Title style={{ display: 'flex', justifyContent: 'center' }}>{props.product.name}</Card.Title>
        <Card.Text style={{ display: 'flex', justifyContent: 'center' }}>
          {props.product.points}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
