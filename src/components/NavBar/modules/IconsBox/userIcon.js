import { useState, useEffect } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { ModalUser } from '../../../Modals/ModalUser'
import { Cursor } from '../../NavBarStyle'

export const UserIcon = () => {
  const [modalShow, setModalShow] = useState(false)
<<<<<<< HEAD
=======
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

>>>>>>> 3f7318a32eb357f28b552b0ae41802c3f22b2601
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
        : <div className='d-flex w-auto' style={{ borderRadius: '100%', textColor: 'green' }}><h1 className='text-success'>{initial}</h1> </div>}
    </>
  )
}
