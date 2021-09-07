import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Statements = (props) => {
  const allProducts = useSelector(state => state.products)
  const dispatch = useDispatch()

  const [actualSubcategories, setActualSubcategories] = useState([])

  const [options, setOptions] = useState({
    category: props.location.state ? props.location.state.category : 'Camaras',
    subCategory: [],
    price: 'all',
    raiting: [],
    orderBy: 'priceAsc'
    // direction: 'asc'
  })

  const [finalList, setFinalList] = useState(allProducts)

  return {
    allProducts,
    actualSubcategories,
    setActualSubcategories,
    dispatch,
    options,
    setOptions,
    finalList,
    setFinalList
  }
}
