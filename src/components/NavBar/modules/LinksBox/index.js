import { HomeLink } from './home'
import DropCategories from '../DropCategories'
import { SetSurface } from '../../NavBarStyle'

export const LinksBox = () => {
  return (
    <div className='d-flex justify-content-center align-items-center' style={SetSurface('40vh')}>
      <HomeLink />
      <DropCategories />
    </div>
  )
}
