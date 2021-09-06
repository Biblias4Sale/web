import { NavLink } from 'react-bootstrap'
import { LinkStyle } from '../../NavBarStyle'

export const HomeLink = () => {
  return (
    <NavLink to='/' style={LinkStyle}>
      Inicio
    </NavLink>
  )
}
