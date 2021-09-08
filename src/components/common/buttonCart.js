import { Button } from 'react-bootstrap'
import { HiOutlineShoppingCart } from 'react-icons/hi'

export const ButtonCart = () => {
  return (
    <div className='d-flex justify-content-center'>
      <Button variant='dark' size='sm' className='d-flex align-items-center text-nowrap'>
        <HiOutlineShoppingCart size={25} className='me-2' />
        <h6> AGREGAR AL CARRITO </h6>
      </Button>
    </div>
  )
}
