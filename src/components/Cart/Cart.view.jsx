import { Container, Col, Row, InputGroup, Button, FormControl } from 'react-bootstrap'
import { FormatedPrice } from '../../components/common/formatedPrice'
import styles from './Cart.module.css'

export const CartView = ({ cart, total, addOne }) => {
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
                <img src={product.img} alt='' style={{ width: '80px' }} />
              </Col>

              <Col lg={6}>
                <Row>
                  {product.model}
                </Row>
                <Row>
                  Marca: {product.brand}
                </Row>

                <Row>
                  <Col>Eliminar</Col>
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
                    value={prod
                        .
                        
                        
                        uct.qty}
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
