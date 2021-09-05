import { Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeActualCategory } from '../../../../redux/actions'
import Luces from '../../../../assets/luces.jpg'
import { StyleContainer, CenterImgs } from '../../HomeStyle'

export const CenterImg = () => {
  const dispatch = useDispatch()
  return (
    <Col lg={4} style={StyleContainer}>
      <Link to='/catalogo'>
        <Image
          src={Luces} style={CenterImgs}
          onClick={dispatch(changeActualCategory('luces'))}
        />
      </Link>
    </Col>
  )
}
