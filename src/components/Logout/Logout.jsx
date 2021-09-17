import { useDispatch } from 'react-redux'
import { logOut } from '../../redux/actions/userActions'

const Logout = () => {
  const dispatch = useDispatch()
  dispatch(logOut())
}

export default Logout
