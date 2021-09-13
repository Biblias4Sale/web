import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, logOut } from '../../../../../redux/actions/index'
import { DeleteUserView } from './DeleteUserView'
import { toastCustom } from '../../../../common/Toastify'

export const DeleteUser = ({ show, setShowModal, onHide }) => {
  const dispatch = useDispatch()
  const info = useSelector(state => state.logged)

  const handleClose = () => { setShowModal(false) }

  const handleOnSubmit = () => {
    try {
      dispatch(deleteUser(info.user.id))
      dispatch(logOut())
      toastCustom('Tu cuenta ha sido eliminada', 'success', 4000, 'bottom-right')
      window.location = '/logout'
    } catch (error) {
      console.log('Error en actualizar cuenta', error)
      toastCustom('Tu cuenta no pudo ser eliminada', 'error', 4000, 'bottom-right')
    }
  }

  return (
    <>
      <DeleteUserView
        showModal={show}
        handleOnSubmit={handleOnSubmit}
        handleClose={handleClose}
      />
    </>
  )
}
