import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { SearchBarView } from './SearchBarView'

export const SearchBar = () => {
  const allProducts = useSelector(state => state.products)
  const [search, setSearch] = useState([])
  const [parsedProducts, setParsedProducts] = useState([])

  useEffect(() => {
    const arr = allProducts.map(product => {
      return {
        id: product.id,
        brand: product.brand,
        model: product.model,
        img: product.img,
        price: product.price,
        name: product.brand + ' ' + product.model
      }
    })

    setParsedProducts(arr)
  }, [allProducts])

  const handleChangeSearchBar = e => {
    if (e.target.value !== '') {
      const searchResult = parsedProducts.filter(product => product.name.toLowerCase().includes(e.target.value.toLowerCase()))
      setSearch(searchResult)
    } else {
      setSearch([])
    }
  }

  return (
    <div>
      <SearchBarView handleChangeSearchBar={handleChangeSearchBar} search={search} />
    </div>
  )
}
