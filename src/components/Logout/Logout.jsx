import axios from 'axios'
import { ApiURL } from '../../config/config'

const Logout = async () => {
  console.log('me deslogueo')
  return await axios.get(`${ApiURL}/logout`, { withCredentials: true })
}

export default Logout
