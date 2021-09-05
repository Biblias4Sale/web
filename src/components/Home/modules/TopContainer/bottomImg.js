import { Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeActualCategory } from '../../../../redux/actions'
import Accesorios from '../../../../assets/accesorios.jpg'
import { ImgWidth } from '../../HomeStyle'

export const BottomImg = () => {
  const dispatch = useDispatch()
  return (
    <Link to='/catalogo'>
      <Row>
        <Image
          src={Accesorios} alt='Accesorios NOI LOAN' style={ImgWidth('40vh')}
          onClick={dispatch(changeActualCategory('accesorios'))}
        />
      </Row>
    </Link>
  )
}
