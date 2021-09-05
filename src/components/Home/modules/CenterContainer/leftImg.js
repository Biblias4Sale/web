import { Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeActualCategory } from '../../../../redux/actions'
import Soportes from '../../../../assets/soportes.jpg'
import { StyleContainer, CenterImgs } from '../../HomeStyle'

export const LeftImg = () => {
  const dispatch = useDispatch()
  return (
    <Col lg={4} style={StyleContainer}>
      <Link to='/catalogo'>
        <Image
          src={Soportes} style={CenterImgs}
          onClick={dispatch(changeActualCategory('soportes'))}
        />
      </Link>
    </Col>
  )
}
