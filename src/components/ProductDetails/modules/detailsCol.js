import { Col } from 'react-bootstrap'
import { GetStarts } from '../../common/getStars'
import { ButtonCart } from './buttonCart'
import { DetailsColStyle, Height } from '../ProductDetailsStyle'

export const DetailsCol = ({ product }) => {
  const productStars = GetStarts(product)

  return (
    <Col xs={12} lg={5} style={DetailsColStyle}>
      <h5 style={Height('4vh')}> {product.name} </h5>
      <div style={Height('4vh', 'orange')}> {productStars} </div>
      <h4 style={Height('4vh')}> $3.200 </h4>
      <h6 style={Height('2vh')}> Descripción </h6>
      <p style={Height('28vh')}>
        {product.description}
      </p>
      <h6 style={Height('2vh')}> Marca</h6>
      <h6 style={Height('4vh')}> LORE IMPSUM </h6>
      <ButtonCart />
    </Col>
  )
}