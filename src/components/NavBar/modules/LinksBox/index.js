import { HomeLink } from './home'
import DropCategories from '../DropCategories'
import { SetSurface } from '../../NavBarStyle'

export const LinksBox = () => {
  return (
    <div className='d-flex justify-content-around align-items-end' style={SetSurface('40vh', '6vh')}>
      <HomeLink />
      <DropCategories />
    </div>
  )
}
