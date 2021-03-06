import { NavLink } from 'react-router-dom'
import { ButtonCart } from './buttonCart'
import { LinkStyle } from './styles/cardsStyles'

export const CardBottom = ({ product }) => {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column' style={LinkStyle}>
      <NavLink to={`/product/details/${product.id}`} />
      <ButtonCart
        product={product}
      />
    </div>
  )
}
