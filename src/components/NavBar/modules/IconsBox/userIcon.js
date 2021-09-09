import { useState, useEffect } from 'react'
import { NavDropdown } from 'react-bootstrap'
import { FaRegUserCircle } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { ModalUser } from '../../../Modals/ModalUser'
import { Cursor } from '../../NavBarStyle'
import { logOut } from '../../../../redux/actions/index'

export const UserIcon = () => {
  const [modalShow, setModalShow] = useState(false)
  const logged = useSelector(state => state.logged)
  const [initial, setinitial] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    if (logged !== false) {
      const name = logged.name
      const lastName = logged.lastName
      const initialName = name[0].toUpperCase()
      const initialLastName = lastName[0].toUpperCase()

      setinitial(initialName.concat(initialLastName))
    }
  }, [logged])

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
        : (
          <div className='d-flex'>
            <NavDropdown
              title={
                <span className='text-white'>{initial}</span>
            }
              className='d-flex justify-content-center rounded-circle bg-success'
            >
              <NavDropdown.Item> Mi cuenta </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={e => dispatch(logOut(e))}>Cerrar sesión </NavDropdown.Item>
            </NavDropdown>
          </div>
          )}
    </>
  )
}
