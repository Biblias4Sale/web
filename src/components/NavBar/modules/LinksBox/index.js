import { Col } from 'react-bootstrap'
import { HomeLink } from './home'
import DropCategories from '../DropCategories'
import { LinkBoxStyle } from '../../NavBarStyle'

export const LinksBox = () => {
  return (
    <Col xs={7} sm={5} lg={5} style={LinkBoxStyle}>
      <HomeLink />
      <DropCategories />
    </Col>
  )
}
