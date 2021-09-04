import { useState } from 'react'
import { useSelector } from 'react-redux'
import { SearchBarView } from './SearchBarView'

export const SearchBar = () => {
  const allProducts = useSelector(store => store.products)
  const [search, setSearch] = useState([])

  const handleChangeSearchBar = e => {
    // if (search.length === 0) setSearch([])
    const searchResult = allProducts.filter(product => product?.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setSearch(searchResult)
  }
  return (
    <div>
      <SearchBarView handleChangeSearchBar={handleChangeSearchBar} search={search} />
    </div>
  )
}
