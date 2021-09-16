import { AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { CursorLike } from '../../NavBarStyle'

export const LikeIcon = () => {
  return (
    <div>
      <Link to='/micuenta' className='text-decoration-none'>
        <AiOutlineHeart size={25} title='Favoritos' style={CursorLike} />
      </Link>
    </div>
  )
}
