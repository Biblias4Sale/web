import { Container, Col, Row, InputGroup, Button, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FormatedPrice } from '../common/formatedPrice'
import styles from './Cart.module.css'

const Saved = ({ saved, moveToCart, removeFromSaved }) => {
  return (

    <Container id={styles.body} className='justify-content-center'>
      {saved.map(product => (
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
              <Col><Link to='#' onClick={() => removeFromSaved(product.id)}>Eliminar</Link></Col>
              <Col><Link to='#' onClick={() => moveToCart(product)}>Agregar al carrito</Link></Col>
            </Row>
          </Col>

          <Col lg={2} className='d-flex justify-content-center align-items-center'>
            <InputGroup style={{ width: '7.5vw' }} className='text-center'>
              <Button variant='outline-dark'>
                <span className='fw-bolder'>-</span>
              </Button>
              <FormControl
                className='fw-bolder'
                // value={product.qty}
              />
              <Button variant='outline-dark'>
                <span className='fw-bolder d-flex justify-content-center align-items-center'>+</span>
              </Button>
            </InputGroup>
          </Col>

          <Col lg={1} className='d-flex justify-content-center align-items-center flex-column'>
            <Row><span className='fw-bolder fs-5'>{product && FormatedPrice(product)}</span></Row>
          </Col>
        </Row>
      )
      )}

    </Container>
  )
}

export default Saved
