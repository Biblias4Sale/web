import { useDispatch } from 'react-redux'
import { logOut } from '../../../redux/actions/userActions'

export const Logout = () => {
  const dispatch = useDispatch()
  dispatch(logOut())
}
