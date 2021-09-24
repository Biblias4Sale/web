import { FormatedPrice } from '../../../common/formatedPrice'
import { Card, Container, Image, Row, Button } from 'react-bootstrap'
import { CardStyle } from './MyShoppingStyle'
import { Link } from 'react-router-dom'
import moment from 'moment'

export const MyShoppingView = ({ orders, makeReview }) => {
  return (
    <div>
      {orders.map((order, index) => {
        const formatedTotal = FormatedPrice({ price: order.totalAmount })
        return (
          <Container key={index} style={{ border: 'solid 1px grey' }} className='m-2'>
            <h4 className='d-flex text-success'>{order.status} </h4>
            <h4>Total: {formatedTotal}</h4>
            <p className='d-flex'>{moment(order.confirmationPending).format('LLLL')}</p>
            <div>{order.productSolds?.map(product => {
              const formatedPrice = FormatedPrice(product)
              return (
                <div key={product.idProduct} className='d-inline-flex'>
                  <Card style={CardStyle} className='d-inline-flex justify-content-center align-items-center'>
                    <Link
                      to={`/product/details/${product.idProduct}`}
                      className='d-flex justify-content-center align-items-center'
                    >
                      <Image variant='top' src={product.img} style={{ height: '60px' }} className='m-1' fluid />
                    </Link>
                    <Card.Body className='fw-bolder'>
                      <Row style={{ height: '10vh' }}><Card.Text className='text-center'>{product.brand + ' ' + product.model}</Card.Text></Row>
                      <Row><Card.Text className='d-flex justify-content-center'> {formatedPrice} </Card.Text></Row>
                      {order.status === 'Entregado' ? <Row> <Button onClick={() => makeReview(product.idProductSold)}> Dejar review </Button> </Row> : null}
                    </Card.Body>
                  </Card>
                </div>
              )
            })}
            </div>
          </Container>
        )
      })}
    </div>
  )
}
