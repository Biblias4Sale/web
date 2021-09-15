import { Container, Col, Row, InputGroup, Button, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FormatedPrice } from '../../components/common/formatedPrice'
import styles from './Cart.module.css'

const Main = ({ mainList, total, addQtyToCart, removeFromCart, subtractQtyFromCart, moveToSaved, newKey }) => {
  return (

    <Container id={styles.body} className='justify-content-center bg-white'>
      {mainList.length > 0
        ? (
          <>
            {mainList.map(product => {
              const subtotal = product?.price * product?.qty

              return (
                <Row className='border border-dark p-2 mt-2  bg-white' key={{ newKey } + product.id}>
                  <Col lg={2} className='d-flex justify-content-center align-items-center'>
                    <Link to={`/product/details/${product.id}`}>
                    <img src={product.img} alt='' style={{ maxWidth: '80px', maxHeight: '80px' }} />
                    </Link>
                  </Col>

                  <Col lg={6}>
                    <Row className='text-uppercase mt-2'>
                      <h5>{product.model}</h5>
                    </Row>
                    <Row>
                      <p> Marca: {product.brand}</p>
                    </Row>

                    <Row lg={7}>
                      <Col lg={3}><Link to='#' onClick={() => removeFromCart(product.id)}>Eliminar</Link></Col>
                      <Col lg={4}><Link to='#' onClick={() => moveToSaved(product)}>Guardar para después</Link></Col>
                    </Row>
                  </Col>

                  <Col lg={2} className='d-flex justify-content-center align-items-center'>
                    <InputGroup style={{ width: '7.5vw' }} className='text-center'>

                      <Button variant='outline-dark' onClick={() => subtractQtyFromCart(product.id)}>
                        <span className='fw-bolder'>-</span>
                      </Button>

                      <FormControl
                        className='fw-bolder text-center bg-white'
                        name='qty'
                        value={product.qty}
                        readOnly
                      />

                      <Button variant='outline-dark' onClick={() => addQtyToCart(product)}>
                        <span className='fw-bolder'>+</span>
                      </Button>

                    </InputGroup>
                  </Col>

                  <Col lg={1} className='d-flex justify-content-center align-items-center flex-column'>
                    <Row><span className='fw-bolder fs-5'>{FormatedPrice({ price: subtotal })}</span></Row>
                  </Col>
                </Row>
              )
            })}
            <Row className='fw-bolder fs-4 d-flex justify-content-end align-items-center p-5'>
                Total: {total && FormatedPrice({ price: total })}
            </Row>

            <Row lg={5} className='d-flex justify-content-center align-items-center flex-column'>                      
              <Button variant='outline-dark'>
                        <span className='fw-bolder'>Comprar</span>
             </Button>
             </Row>
          </>
          )
        : (
          <h4>Tu carrito está vacío</h4>
          )}
    </Container>
  )
}

export default Main
