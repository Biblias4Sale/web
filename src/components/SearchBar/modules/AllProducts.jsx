import { Row, Col, Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export const AllProducts = (props) => {
  return (
    <>
      {props.search?.map(elem => (
        <NavLink to={'/detail/' + elem.id} key={elem.id} style={{ textDecoration: 'none' }}>
          <Row lg={6} md={8} sm={10} className='justify-content-center p-2'>
            <Col className='ml-2'>
              <Image src={elem.img} alt='No encontrada' width='100px' height='100px' />
            </Col>
            <Col key={elem.brand} lg={8}>
              <h3>
                {elem.brand}
              </h3>
              <h5>
                {elem.model}
              </h5>
              <h5>
                ${elem.price}
              </h5>
            </Col>
          </Row>
        </NavLink>
      ))}
    </>
  )
}
