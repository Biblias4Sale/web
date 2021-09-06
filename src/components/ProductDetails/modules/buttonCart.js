import { HiOutlineShoppingCart } from 'react-icons/hi'
import { ButtonCartStyle } from '../ProductDetailsStyle'

export const ButtonCart = () => {
  return (
    <div variant='dark' style={ButtonCartStyle}>
      <HiOutlineShoppingCart size={25} style={{ marginRight: '20px' }} />
      AGREGAR AL CARRITO
    </div>
  )
}
