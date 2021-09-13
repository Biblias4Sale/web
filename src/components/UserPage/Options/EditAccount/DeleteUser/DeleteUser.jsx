import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../../../../redux/actions/index'
import { DeleteUserView } from './DeleteUserView'
import { toastCustom } from '../../../../common/Toastify'
import axios from 'axios'
import { ApiURL } from '../../../../../config/config'

export const DeleteUser = ({ show, setShowModal, onHide }) => {
  const dispatch = useDispatch()
  const logged = useSelector(state => state.logged)

  const handleClose = () => { setShowModal(false) }

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
          showModal={show}
          handleOnSubmit={handleOnSubmit}
          handleClose={handleClose}
        />
      </>
      )
    : null
}
