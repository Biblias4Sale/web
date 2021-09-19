import { useSelector } from 'react-redux'

export const GetProducts = () => {
  return useSelector(state => state.products)
}
