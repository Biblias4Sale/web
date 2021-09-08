import { useState, useEffect } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { ModalUser } from '../../../Modals/ModalUser'
import { Cursor } from '../../NavBarStyle'

export const UserIcon = () => {
  const [modalShow, setModalShow] = useState(false)
  const logged = useSelector(state => state.logged)
  const [initial, setinitial] = useState('')

  useEffect(() => {
    if (logged !== false) {
      const name = logged.name
      const lastName = logged.lastName
      const initialName = name[0].toUpperCase()
      const initialLastName = lastName[0].toUpperCase()

      setinitial(initialName.concat(initialLastName))
    }
  }, [logged])

  console.log(initial)

  return (
    <>
      {logged === false
        ? (
          <>
            <FaRegUserCircle size={32} onClick={() => setModalShow(true)} title='Login' style={Cursor} />
            <ModalUser
              setModalShow={setModalShow}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </>
          )
        : <div className='d-flex bg-gray'><h1>{initial}</h1> </div>}
    </>
  )
}
