import { Col, Container } from 'react-bootstrap'
import { SearchIcon } from './searchIcons'
import { CartIcon } from './cartIcon'
import { UserIcon } from './userIcon'
import { IconContainer } from '../../NavBarStyle'

export const IconsBox = () => {
  return (
    <Col xs={4} sm={12} lg={2}>
      <Container style={IconContainer}>
        <SearchIcon />
        <CartIcon />
        <UserIcon />
      </Container>
    </Col>
  )
}
