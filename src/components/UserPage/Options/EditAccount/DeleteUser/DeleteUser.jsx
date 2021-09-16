import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../../../../redux/actions/userActions'
import { DeleteUserView } from './DeleteUserView'
import { toastCustom } from '../../../../common/Toastify'
import axios from 'axios'
import { ApiURL } from '../../../../../config/config'

export const DeleteUser = ({ show, onHide }) => {
  const dispatch = useDispatch()
  const logged = useSelector(state => state.logged)

  const handleOnSubmit = () => {
    try {
      axios.delete(`${ApiURL}/user/${logged.user.id}`, { withCredentials: true })
      toastCustom('Tu cuenta ha sido eliminada', 'success', 4000, 'bottom-right')
      setTimeout(() => {
        dispatch(logOut())
      }, 2900)
      setTimeout(() => {
        window.location = '/'
      }, 3000)
    } catch (error) {
      toastCustom('Tu cuenta no pudo ser eliminada', 'error', 4000, 'bottom-right')
    }
  }

  return logged
    ? (
      <>
        <DeleteUserView
          show={show}
          handleOnSubmit={handleOnSubmit}
          onHide={onHide}
        />
      </>
      )
    : null
}
