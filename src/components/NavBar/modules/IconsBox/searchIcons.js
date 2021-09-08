import { FaSearch } from 'react-icons/fa'
import { Cursor } from '../../NavBarStyle'

export const SearchIcon = () => {
  return (
    <div>
      <FaSearch size={28} title='Search' style={Cursor} />
    </div>
  )
}
