import { Col } from 'react-bootstrap'
import { GetStarts } from '../../common/getStars'
import { ButtonCart } from '../../common/buttonCart'
import { Loading } from '../../common/spinner'
import { DetailsColStyle, Height } from '../ProductDetailsStyle'
import emojiShocked from '../../../assets/emojishock.png'

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
            <h6 style={Height('3vh')}> Marca: {product.brand}</h6>
            <div style={Height('4vh', 'orange')}> {productStars} </div>
            <h4 style={Height('4vh')}> {`$${product.price}`} </h4>
            <h6 style={Height('2vh')}> Descripción </h6>
            <p style={Height('18vh')}>
              {product.description}
            </p>

            <div style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center' }}>
              {product.stock === 1
                ? (
                  <>
                    <div>
                      <h6 style={Height('2vh')}> Stock disponible: última unidad! </h6>
                    </div>
                    <div>
                      <img src={emojiShocked} alt='' style={{ width: '35px', marginLeft: '0.5rem' }} />
                    </div>
                  </>
                  )
                : null}
              {product.stock > 1
                ? <h6 style={Height('2vh')}> Stock disponible: {product.stock} unidades </h6>
                : null}
              {product.stock < 1
                ? <h5 className='text-danger'> Sin Stock </h5>
                : null}
            </div>

            {product.stock > 0 ? <ButtonCart product={product} /> : null}

          </Col>
          )
      }
    </>
  )
}
