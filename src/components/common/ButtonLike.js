import { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { toastCustom } from './Toastify'
import { getFavorites } from '../../redux/actions/index'
// import { addProductToFavorites } from '../../redux/actions/index'
import { ApiURL } from '../../config/config'
import axios from 'axios'

export const ButtonLike = ({ product }) => {
  const dispatch = useDispatch()
  const userID = useSelector(state => state.logged.user.id)
  const favoritesProd = useSelector(state => state.favorites)
  const [heartColor, setHeartColor] = useState({ color: 'gray' })

  const RemovefromFavorites = async (productID) => {
    await axios.delete(`${ApiURL}/favorites/${userID}/${productID}`)
    dispatch(getFavorites(userID))
  }

  const handleClick = async () => {
    if (favoritesProd.some(obj => obj.id === product.id)) {
      console.log('entre')
      setHeartColor({ color: 'gray' })
      RemovefromFavorites(product.id)
      toastCustom('Producto eliminado de favoritos', 'success', 4000, 'bottom-right')
    } else {
      try {
        await axios.post(`${ApiURL}/favorites/${userID}/${product.id}`)
        dispatch(getFavorites(userID))
        setHeartColor({ color: 'red' })
        toastCustom('Producto agregado favoritos', 'success', 4000, 'bottom-right')
      } catch (error) {
        toastCustom('Producto no pudo ser agregado', 'error', 4000, 'bottom-right')
      }
    }
  }

  return (
    <>
      {
      !favoritesProd.some(obj => obj.id === product.id)
        ? <div style={{ color: heartColor.color, cursor: 'pointer', display: 'flex', padding: '5px', justifyContent: 'end' }}><AiFillHeart size={25} onClick={handleClick} /></div>
        : <div style={{ color: 'red', cursor: 'pointer', display: 'flex', padding: '5px', justifyContent: 'end' }}><AiFillHeart size={25} onClick={handleClick} /></div>
      }
    </>
  )
}
