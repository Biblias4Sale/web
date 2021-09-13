import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, logOut } from '../../../../../redux/actions/index'
import { DeleteUserView } from './DeleteUserView'
import { toastCustom } from '../../../../common/Toastify'

export const DeleteUser = ({ show, setShowModal, onHide }) => {
  const dispatch = useDispatch()
  const logged = useSelector(state => state.logged)

  const handleClose = () => { setShowModal(false) }

  const handleOnSubmit = () => {
    try {
      dispatch(deleteUser(logged.user.id))
      dispatch(logOut())
      toastCustom('Tu cuenta ha sido eliminada', 'success', 4000, 'bottom-right')
      setTimeout(() => {
        window.location = '/'
      }, 2000)
    } catch (error) {
      // console.log('Error en actualizar cuenta', error)
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
