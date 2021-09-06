import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { ModalSearchBar } from '../../../Modals/ModalSearchBar'
import { Cursor } from '../../NavBarStyle'

export const SearchIcon = () => {
  const [modalShow, setModalShow] = useState()

  return (
    <div>
      <FaSearch size={28} onClick={() => setModalShow(true)} title='Search' style={Cursor} />
      <ModalSearchBar
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}
