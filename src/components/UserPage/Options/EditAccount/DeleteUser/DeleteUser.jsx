import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../../../../../redux/actions/index'
import { DeleteUserView } from './DeleteUserView'

export const DeleteUser = (props) => {
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState('delete')
  const info = useSelector(state => state.logged)

  const handleClose = () => setShowModal(false)

  const handleOnSubmit = () => {
    dispatch(deleteUser(info.user.id))
  }

  return (
    <>
      <DeleteUserView
        {...props}
        showModal={showModal}
        handleOnSubmit={handleOnSubmit}
        handleClose={handleClose}
      />
    </>
  )
}
