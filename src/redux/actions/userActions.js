import axios from 'axios'
import { SET_LOGGED, LOG_OUT } from './constants'
import { ApiURL } from '../../config/config'

export const setLogged = (userInfo) => {
  return {
    type: SET_LOGGED,
    payload: userInfo
  }
}

export const logOut = () => {
  axios.get(`${ApiURL}/logout`, { withCredentials: true })
  return {
    type: LOG_OUT
  }
}

export const editUser = (id, data, token, cart) => {
  return async function (dispatch) {
    axios.put(`${ApiURL}/user/${id}`, data, { withCredentials: true })
      .then(editUser => {
        const EditedUser = {
          user: {
            id: editUser.data.id,
            name: editUser.data.name,
            lastName: editUser.data.lastName,
            email: editUser.data.email,
            password: editUser.data.password,
            cp: editUser.data.cp,
            address: editUser.data.address,
            city: editUser.data.city,
            province: editUser.data.province,
            phone: editUser.data.phone
          },
          token,
          cart
        }
        if (editUser.status === 200) {
          return dispatch({
            type: SET_LOGGED,
            payload: EditedUser
          })
        }
      })
      .catch(e => window.alert('Usuario No Modificado'))
  }
}
