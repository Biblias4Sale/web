import { Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { changeActualCategory } from '../../../../redux/actions'
import Camaras from '../../../../assets/camaras.jpg'
import { ImgWidth } from '../../HomeStyle'

export const RightImg = () => {
  const dispatch = useDispatch()
  return (
    <Row>
      <Link
        to={{
          pathname: '/catalogo',
          state: { category: 'Camaras' }
        }}
      >
        <Image
          src={Camaras} alt='Camaras NOI LOAN' style={ImgWidth('100vh')}
          // onClick={dispatch(changeActualCategory('Camaras'))}
        />
      </Link>
    </Row>
  )
}
