import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SearchBarView } from './SearchBarView'
import { setSearchResult, setSearchString } from '../../redux/actions/productActions'

export const SearchBar = () => {
  const dispatch = useDispatch()
  const allProducts = useSelector((state) => state.products)
  const [result, setResult] = useState([])
  const [searching, setSearching] = useState([])

  const handleChangeSearchBar = (event) => {
    if (event.target.value !== '') {
      const searchResult = allProducts.filter((product) => {
        const name = product.brand + ' ' + product.model
        return name.toLowerCase().includes(event.target.value.toLowerCase())
      })
      setResult(searchResult)
      setSearching(event.target.value)
    } else {
      setSearching('')
      setResult([])
    }
  }

  const search = (event) => {
    dispatch(setSearchResult(result))
    dispatch(setSearchString(searching))
    setSearching('')
  }

  return (
    <div>
      <SearchBarView
        handleChangeSearchBar={handleChangeSearchBar}
        result={result}
        search={search}
        searching={searching}
      />
    </div>
  )
}
