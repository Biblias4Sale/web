import { Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export const AllProducts = (props) => {
  return (
    <div className='justify-content-center'>
      {props.search?.map(elem => {
        const price = elem.price.toString()
        const formatedPrice = '$' + new Intl.NumberFormat('es-ES').format(price)

        return (

          <NavLink to={'product/details/' + elem.id} key={elem.id} style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>
            <Row lg={6} md={8} sm={10} className='justify-content-center'>
              <Col key={elem.brand} lg={8}>
                <h6>
                  {elem.brand} - {elem.model} {formatedPrice}
                </h6>
              </Col>
            </Row>
          </NavLink>
        )
      }

      )}
    </div>
  )
}
