import { useState, useEffect } from 'react'
import { NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaRegUserCircle } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Session } from '../../../Session/Session'
import { Cursor } from '../../NavBarStyle'
import { logOut } from '../../../../redux/actions/index'
import { useHistory } from 'react-router-dom';

export const UserIcon = () => {
  const [modalShow, setModalShow] = useState(false)
  const logged = useSelector(state => state.logged)
  const [initial, setinitial] = useState('')
  const [currentView, setCurrentView] = useState('init')

  const dispatch = useDispatch()

  const history = useHistory();

  useEffect(() => {
    if (logged) {
      const name = logged.user.name
      const lastName = logged.user.lastName
      const initialName = name[0].toUpperCase()
      const initialLastName = lastName[0].toUpperCase()

      setinitial(initialName.concat(initialLastName))
    }
  }, [logged])

    const handleLogOut = (e) => {
      e.preventDefault()
    if (window.location.pathname === '/micuenta') {   
        history.push('/')
        dispatch(logOut(e))
  }
    else
      dispatch(logOut(e))
  }

  return (
    <>
      {logged === false
        ? (
          <>
            <FaRegUserCircle size={32} onClick={() => setModalShow(true)} title='Login' style={Cursor} />
            <Session
              currentView={currentView}
              setCurrentView={setCurrentView}
              show={modalShow}
              onHide={() => {
                setModalShow(false)
                setTimeout(() => {
                  setCurrentView('init')
                }, 500)
              }}
            />
          </>
          )
        : (
          <div className='dropdown'>
            <NavDropdown 
              title={
                <span className='text-dark'>{initial}</span>
            }
            className='d-relative justify-content-around rounded-circle border border-dark dropdown-menu-left'
            >
              <NavDropdown.Item> <Link to='/micuenta'> Mi cuenta </Link> </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogOut}>Cerrar sesión </NavDropdown.Item>
            </NavDropdown>
          </div>
          )}
    </>
  )
}
