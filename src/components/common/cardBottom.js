import { NavLink } from 'react-router-dom'
import { ButtonCart } from './buttonCart'

export const CardBottom = ({ product, stars }) => {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column' style={{ color: 'orange' }}>
      <div className='mb-1'>
        {stars}
      </div>
      <NavLink to={`/product/details/${product.id}`}>
        <ButtonCart />
      </NavLink>
    </div>
  )
}
