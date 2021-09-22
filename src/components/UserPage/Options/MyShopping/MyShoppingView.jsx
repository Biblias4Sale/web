import { FormatedPrice } from '../../../common/formatedPrice'
import { Card, Container, Image, Row } from 'react-bootstrap'
import { CardStyle } from './MyShoppingStyle'
import { Link } from 'react-router-dom'
 

export const MyShoppingView = ({orders}) => (
  
        <div>
            {orders.sort((a, b) =>  b.cartId - a.cartId).map(elem => {
                return (
                    <Container  style={{border: 'solid 1px grey'}} className='m-2'>
                    <h4 className='d-inline-flex p-3'>{elem.cartId}</h4>
                    <h4 className='d-inline-flex text-success'>{elem.status}</h4>
                    <div>{elem.productSolds?.map(product => {
                          const formatedPrice = FormatedPrice(product)
                        return (
                            <div className='d-inline-flex'>
                                <Card style={CardStyle} className='d-inline-flex justify-content-center align-items-center'>
      <Link
        to={`/product/details/${product.id}`}
        className='d-flex justify-content-center align-items-center'
      >
        <Image variant='top' src={product.img} style={{ height: '60px' }} className='m-1' fluid />
      </Link>
      <Card.Body className='fw-bolder'>
      <Row style={{height: '10vh'}}><Card.Text className='text-center'>{product.brand + ' ' + product.model}</Card.Text></Row>
      <Row><Card.Text className='d-flex justify-content-center'> {formatedPrice} </Card.Text></Row>
      </Card.Body>
    </Card>
                            </div>
                        )
                    })}</div>
                    </Container>
)})} 
        </div>
    )