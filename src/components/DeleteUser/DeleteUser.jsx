import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../../redux/actions'

export const DeleteUser = () => {
  const info = useSelector(state => state.logged)

  const dispatch = useDispatch()
  dispatch(deleteUser(info.id))
}
