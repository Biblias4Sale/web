import { Alert, Button } from 'react-bootstrap'
import { ImHeartBroken } from 'react-icons/im'

export const NoProductToShow = ({ clearSearch, clearCategory }) => {
  const onClick = () => {
    clearSearch()
    clearCategory()
  }
  return (
    <Alert variant='danger'>
      <div className='d-flex justify-content-between align-items-center'>
        <ImHeartBroken size={25} />
        <Button variant='secondary' onClick={onClick}> X </Button>
      </div>
      <hr />
      <Alert.Heading> Oooops! no hay productos que mostrar </Alert.Heading>
      <p>
        Lamentamos no tener productos para mostrar. Estamos trabajando para tener
        los mejores productos del mercado a tu alcance.
      </p>
    </Alert>
  )
}
