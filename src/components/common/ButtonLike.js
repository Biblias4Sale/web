import { AiOutlineHeart } from 'react-icons/ai'

export const ButtonLike = ({ addFavorite }) => {
  return (
    <div style={{ color: 'red', cursor: 'pointer' }}><AiOutlineHeart onClick={addFavorite} /></div>
  )
}
