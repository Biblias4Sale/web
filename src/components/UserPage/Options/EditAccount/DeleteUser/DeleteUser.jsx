import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, logOut } from '../../../../../redux/actions/index'
import { DeleteUserView } from './DeleteUserView'

export const DeleteUser = ({ show, setShowModal }) => {
  const dispatch = useDispatch()
  const info = useSelector(state => state.logged)

  const handleShow = () => setShowModal(true)
  const handleClose = () => setShowModal(false)

  const handleOnSubmit = () => {
    dispatch(deleteUser(info.user.id))
    setTimeout(() => {
      dispatch(logOut())
    }, 2000)
  }

  return (
    <>
      <DeleteUserView
        showModal={show}
        handleOnSubmit={handleOnSubmit}
        handleClose={handleClose}
        handleShow={handleShow}
      />
    </>
  )
}
