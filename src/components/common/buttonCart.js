import { Button } from 'react-bootstrap'
import { HiOutlineShoppingCart } from 'react-icons/hi'

export const ButtonCart = () => {
  return (
    <div style={{ width: '35vh' }} className='d-flex justify-content-center'>
      <Button variant='dark' size='sm' className='d-flex align-items-center'>
        <HiOutlineShoppingCart size={25} style={{ marginRight: '20px' }} />
        <h6 style={{ fontSize: '13px' }}> AGREGAR AL CARRITO </h6>
      </Button>
    </div>
  )
}
