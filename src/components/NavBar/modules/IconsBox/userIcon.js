import { useState } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { ModalUser } from '../../../Modals/ModalUser'
import { Cursor } from '../../NavBarStyle'

export const UserIcon = () => {
  const [modalShow, setModalShow] = useState(false)

  return (
    <div>
      <FaRegUserCircle size={28} onClick={() => setModalShow(true)} title='Login' style={Cursor} />
      <ModalUser
        setModalShow={setModalShow}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}
