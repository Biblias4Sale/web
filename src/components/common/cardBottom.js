import { NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export const CardBottom = ({ product, stars }) => {
  console.log('llegue')
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ color: 'orange' }}>
      {stars}
      <NavLink to={`/product/details/${product.id}`}>
        <Button variant='dark' style={{ marginLeft: '50px' }}> Detalles </Button>
      </NavLink>
    </div>
  )
}
