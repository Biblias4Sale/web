import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SearchBarView } from './SearchBarView'
import { setSearchResult, setSearchString } from '../../redux/actions/index'

export const SearchBar = () => {
  const dispatch = useDispatch()
  const allProducts = useSelector(state => state.products)
  const [result, setResult] = useState([])
  const [searching, setSearching] = useState([])

  // const [parsedProducts, setParsedProducts] = useState([])

  // useEffect(() => {
  //   const arr = allProducts.map(product => {
  //     return {
  //       id: product.id,
  //       category: product.category,
  //       brand: product.brand,
  //       model: product.model,
  //       img: product.img,
  //       price: product.price,
  //       name: product.brand + ' ' + product.model
  //     }
  //   })

  //   setParsedProducts(arr)
  // }, [allProducts])

  const handleChangeSearchBar = event => {
    if (event.target.value !== '') {
      const searchResult = allProducts.filter(product => product.model.toLowerCase().includes(event.target.value.toLowerCase()))
      setResult(searchResult)
      setSearching(event.target.value)
    } else {
      setResult([])
    }
  }

  const search = event => {
    dispatch(setSearchResult(result))
    dispatch(setSearchString(searching))
  }

  return (
    <div>
      <div>
        <SearchBarView handleChangeSearchBar={handleChangeSearchBar} result={result} search={search} />
      </div>
    </div>
  )
}
