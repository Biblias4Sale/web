import { Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeActualCategory } from '../../../../redux/actions'
import CargadoresYbaterias from '../../../../assets/cargadoresYbaterias.jpg'
import { StyleContainer, CenterImgs } from '../../HomeStyle'

export const RightImg = () => {
  const dispatch = useDispatch()
  return (
    <Col lg={4} style={StyleContainer}>
      <Link to=''>
        <Image
          src={CargadoresYbaterias} style={CenterImgs}
          onClick={dispatch(changeActualCategory('cargadoresYbaterias'))}
        />
      </Link>
    </Col>
  )
}
