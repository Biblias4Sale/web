import { useDispatch } from 'react-redux'
import { logOut } from '../../redux/actions/userActions'
// import { deleteFavorites } from '../../../../redux/actions/index'

const Logout = () => {
  const dispatch = useDispatch()
  // dispatch(deleteFavorites())
  dispatch(logOut())
}

export default Logout
