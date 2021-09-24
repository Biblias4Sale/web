import { FormatedPrice } from '../../../common/formatedPrice'
import { Card, Container, Image, Row, Button } from 'react-bootstrap'
import { CardStyle } from './MyShoppingStyle'
import { Link } from 'react-router-dom'
import moment from 'moment'

export const MyShoppingView = ({ orders, makeReview }) => {
  orders.sort(function (a, b) {
    if (a.confirmationPending < b.confirmationPending) {
      return 1
    }
    if (a.confirmationPending > b.confirmationPending) {
      return -1
    }
    return 0
  })

  return (
    <div>
      {orders.map((order, index) => {
        const formatedTotal = FormatedPrice({ price: order.totalAmount })
        return (
          <Container key={index} style={{ border: 'solid 1px grey', padding: '1rem' }} className='m-2'>

            {order.status === 'En preparación' ? <h4 className='d-flex text-primary'>{order.status} </h4> : null}
            {order.status === 'Entregado' ? <h4 className='d-flex text-success'>{order.status} </h4> : null}
            {order.status === 'Pendiente de confirmación de pago' ? <h4 className='d-flex text-secondary'>{order.status} </h4> : null}
            {order.status === 'Cancelado' ? <h4 className='d-flex text-danger'>{order.status} </h4> : null}
            {order.status === 'Despachado' ? <h4 className='d-flex text-warning'>{order.status} </h4> : null}

            <h5>Total: {formatedTotal}</h5>
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
                      {order.status === 'Entregado' ? <Row> <Button variant='dark' onClick={() => makeReview(product.idProductSold)}>Review</Button> </Row> : null}
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
