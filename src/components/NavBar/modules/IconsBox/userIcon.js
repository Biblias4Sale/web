import { useState } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { ModalUser } from '../../../Modals/ModalUser'

export const UserIcon = () => {
  const [modalShow, setModalShow] = useState(false)
  return (
    <div>
      <FaRegUserCircle size={25} onClick={() => setModalShow(true)} />
      <ModalUser
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

// Logica al apretarlo.
