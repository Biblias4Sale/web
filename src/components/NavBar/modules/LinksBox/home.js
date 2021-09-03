import { Link } from 'react-router-dom'
import { LinkStyle } from '../../NavBarStyle'

export const HomeLink = () => {
  return (
    <Link to='/' style={LinkStyle}>
      Inicio
    </Link>
  )
}
