import axios from 'axios'
import { ApiURL } from '../../../../config/config'

export const getSubs = async (setActualSubcategories, options) => {
  const response = await axios.get(`${ApiURL}/categories/getSub/${options.category}`)
  setActualSubcategories(response.data)
}
