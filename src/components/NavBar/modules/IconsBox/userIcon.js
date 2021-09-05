import { useState } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { ModalUser } from '../../../Modals/ModalUser'

export const UserIcon = () => {
  const [modalShow, setModalShow] = useState(false)
  return (
    <div>
      <FaRegUserCircle size={28} onClick={() => setModalShow(true)} title='login' style={{ cursor: 'pointer' }} />
      <ModalUser
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}
