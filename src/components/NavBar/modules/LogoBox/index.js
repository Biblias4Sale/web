import { Image, Navbar } from 'react-bootstrap'
import Logo from '../../../../assets/logo.png'
import { SetSurface } from '../../NavBarStyle'

export const LogoBox = () => {
  return (
    <div style={SetSurface('60vh')}>
      <Navbar.Brand href='/'>
        <Image src={Logo} alt='NOI LOAN' title='NOI LOAN' style={SetSurface('160px')} />
      </Navbar.Brand>
    </div>
  )
}
