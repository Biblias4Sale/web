import { useSelector } from 'react-redux'

export const Categories = () => {
  return useSelector(state => state.categories)
}
