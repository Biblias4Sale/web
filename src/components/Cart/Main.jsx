import { Container, Col, Row, InputGroup, Button, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FormatedPrice } from '../../components/common/formatedPrice'
import styles from './Cart.module.css'

const Main = ({ main, total, addQty, removeFromCart, subtractQty, moveToSaved, handleChange }) => {
  return (

    <Container id={styles.body} className='justify-content-center'>
      {main.map(product => {
        const subtotal = product?.price * product?.qty

        return (
          <Row className='border border-dark p-1 mt-2' key={product.id}>
            <Col lg={2}>
              <img src={product.img} alt='' style={{ width: '5vw' }} />
            </Col>

            <Col lg={6}>
              <Row className='text-uppercase mt-2'>
                <h5>{product.model}</h5>
              </Row>
              <Row>
                <p> Marca: {product.brand}</p>
              </Row>

              <Row>
                <Col><Link to='#' onClick={() => removeFromCart(product.id)}>Eliminar</Link></Col>
                <Col><Link to='#' onClick={() => moveToSaved(product)}>Guardar para después</Link></Col>
              </Row>
            </Col>

            <Col lg={2} className='d-flex justify-content-center align-items-center'>
              <InputGroup style={{ width: '7.5vw' }} className='text-center'>

                <Button variant='outline-dark' onClick={() => subtractQty(product.id)}>
                  <span className='fw-bolder'>-</span>
                </Button>

                <FormControl
                  className='fw-bolder'
                  name='qty'
                  onChange={handleChange(product.qty)} // NO ANDA
                />

                <Button variant='outline-dark' onClick={() => addQty(product)}>
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
      <Row>
        <span className='fw-bolder fs-4 d-flex justify-content-end align-items-center m-3'>
          Total: {total && FormatedPrice({ price: total })}
        </span>

      </Row>
    </Container>
  )
}

export default Main