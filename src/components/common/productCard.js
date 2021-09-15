import { Card, Image } from 'react-bootstrap'
import { CardStyle } from './styles/cardsStyles'
import { CardBottom } from './cardBottom'
import { FormatedPrice } from './formatedPrice'
import { GetStarts } from './getStars'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ButtonLike } from './ButtonLike'

export const ProductCards = ({ product, height, imgWidth, addFavorite }) => {
  const formatedPrice = FormatedPrice(product)
  const productStars = GetStarts(product)
  const logged = useSelector(state => state.logged)

  return (
    <Card style={CardStyle}>
      {logged
        ? (
          <ButtonLike product={product} />
          )
        : null}
      <Link
        to={`/product/details/${product.id}`}
        className='d-flex justify-content-center align-items-center '
        style={{ height: height }}
      >
        <Image variant='top' src={product.img} style={{ height: imgWidth }} fluid />
      </Link>
      <Card.Body className='fw-bolder'>
        <Card.Text className='d-flex justify-content-center'>{product.brand + ' ' + product.model}</Card.Text>
        <Card.Text className='d-flex justify-content-center'> {formatedPrice} </Card.Text>
        <div className='d-flex justify-content-center mb-1' style={{ color: 'orange' }}>
          {productStars}
        </div>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-around align-items-center'>
        <CardBottom product={product} />
      </Card.Footer>
    </Card>
  )
}
