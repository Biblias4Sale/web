import { Row, Col, Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export const AllProducts = (props) => {
  return (
    <div className='justify-content-center'>
      {props.search?.map(elem => (
        <NavLink to={'product/details/' + elem.id} key={elem.id} style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>
          <Row lg={6} md={8} sm={10} className='justify-content-center m-2'>
            <Col className='m-2'>
              <Image src={elem.img} alt='No encontrada' width='80vw' height='80vh' />
            </Col>
            <Col key={elem.brand} lg={8} className='justify-content-center'>
              <h4>
                {elem.brand}
              </h4>
              <h6>
                {elem.model}
              </h6>
              <h5>
                ${elem.price}
              </h5>
            </Col>
          </Row>
        </NavLink>
      ))}
    </div>
  )
}
