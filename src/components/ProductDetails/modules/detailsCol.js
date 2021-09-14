import { Col } from 'react-bootstrap'
import { GetStarts } from '../../common/getStars'
import { ButtonCart } from './buttonCart'
import { Loading } from '../../common/spinner'
import { DetailsColStyle, Height } from '../ProductDetailsStyle'

export const DetailsCol = ({ product }) => {
  const productStars = GetStarts(product)
  return (
    <>
      {
      !product.brand
        ? <Loading />
        : (
          <Col xs={12} lg={5} style={DetailsColStyle}>
            <h5 style={Height('4vh')}> {product.model} </h5>
            <div style={Height('4vh', 'orange')}> {productStars} </div>
            <h4 style={Height('4vh')}> {product.price} </h4>
            <h6 style={Height('2vh')}> Descripción </h6>
            <p style={Height('18vh')}>
              {product.description}
            </p>
            <h6 style={Height('3vh')}> Marca</h6>
            <h6 style={Height('4vh')}> {product.brand} </h6>
            <ButtonCart
              product={product}
            />
            {/* <h6 className='text-danger'> Sin Stock </h6> */}
          </Col>
          )
      }
    </>
  )
}
