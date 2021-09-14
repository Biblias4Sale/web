import { Container, Col, Row, InputGroup, Button, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FormatedPrice } from '../../components/common/formatedPrice'
import styles from './Cart.module.css'

export const CartView = ({ cart, total, addOne, deleteProduct }) => {
  return (
    <>
      <div id={styles.banner} />

      <div id={styles.mainContainer}>

        <div id={styles.header}>
          <ul>
            <li className={styles.headerItem}> Carrito </li>
            <li className={styles.headerItem}> Guardados </li>
          </ul>
        </div>

        <Container id={styles.body}>
          {cart.map(product => (
            <Row className={styles.productContainer} key={product.id}>
              <Col lg={2}>
                <img src={product.img} alt='' style={{ width: '6vw' }} />
              </Col>

              <Col lg={6}>
                <Row className='text-uppercase mt-2'>
                  <h5>{product.model}</h5>
                </Row>
                <Row>
                 <h6> Marca: {product.brand}</h6>
                </Row>

                <Row>
                  <Col><Link to='#' onClick={deleteProduct}>Eliminar</Link></Col>
                  <Col>Guardar para después</Col>

                </Row>

              </Col>

              <Col lg={2}>
                <InputGroup className='mb-3 w-50'>
                  <Button variant='outline-secondary' id='button-addon1'>
                    -
                  </Button>
                  <FormControl
                    aria-label='Example text with button addon'
                    aria-describedby='basic-addon1'
                    value={product.qty}
                  />
                  <Button variant='outline-secondary' id='button-addon1' onClick={addOne(product.id)}>
                    +
                  </Button>
                </InputGroup>
              </Col>

              <Col lg={2}>
                {FormatedPrice(product)}
              </Col>
            </Row>
          )
          )}
          <Row>
            Total: {FormatedPrice({ price: total })}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default CartView
