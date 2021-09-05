import { HiOutlineShoppingCart } from 'react-icons/hi'
import { ButtonCartStyle } from '../ProductDetailsStyle'

export const ButtonCart = () => {
  return (
    <div variant='dark' style={ButtonCartStyle}>
      <HiOutlineShoppingCart size={25} />
      AGREGAR AL CARRITO
    </div>
  )
}
