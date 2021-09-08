import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getProducts, setSearchResult } from '../../redux/actions/index'
import { Statements } from './modules/main/statements'
import { getSubs } from './modules/main/getSubs'
import { filterByCategory } from './modules/main/filterByCategory.js'
import { filterBySubCategory } from './modules/main/filterBySubCategory.js'
import { filterByPrice } from './modules/main/filterByPrice.js'
import { filterByPoints } from './modules/main/filterByPoints.js'
import { orderByPrice } from './modules/main/orderByPrice.js'
import { CatalogueView } from './Catalogue.view.jsx'

export const Catalogue = (props) => {
  const searchResult = useSelector(state => state.searchResult)
  const searchString = useSelector(state => state.searchString)

  const {
    allProducts,
    actualSubcategories,
    setActualSubcategories,
    dispatch,
    options,
    setOptions,
    finalList,
    setFinalList
  } = Statements(props)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  useEffect(() => {
    if (searchResult.length > 0) setOptions(prev => ({ ...prev, searching: `Resultados de "${searchString}":`, category: '' }))
  }, [searchResult.length, setOptions])

  useEffect(() => {
    getSubs(setActualSubcategories, options)

    let toFilter
    if (searchResult.length > 0) toFilter = searchResult
    else toFilter = allProducts

    const filtredByCategory = filterByCategory(options, toFilter)

    const setFilterBySubCategory = filterBySubCategory(options, filtredByCategory)
    const filtredBySubCategory = setFilterBySubCategory

    const setFilterByPrice = filterByPrice(options, filtredBySubCategory)
    const filtredByPrice = setFilterByPrice

    const setFilterByPoints = filterByPoints(options, filtredByPrice)
    const filtredByRaiting = setFilterByPoints

    const setOrderByPrice = orderByPrice(options, filtredByRaiting)
    const ordererByPrice = setOrderByPrice

    setFinalList(ordererByPrice)
  }, [allProducts, options, setActualSubcategories, setFinalList, searchResult, setOptions, options.category])

  const handleChangeMulti = (event) => {
    let newArray = [...options[event.target.name], event.target.id]
    setOptions(prev => ({ ...prev, [event.target.name]: newArray }))
    if (options[event.target.name].includes(event.target.id)) {
      newArray = newArray.filter(subCat => subCat !== event.target.id)
    }
  }

  const handleChange = (event) => {
    if (options.price === event.target.id) setOptions(prev => ({ ...prev, [event.target.name]: 'all' }))
    else setOptions(prev => ({ ...prev, [event.target.name]: event.target.id }))
  }

  const handleCategoryChange = (category) => {
    setOptions(prev => ({ ...prev, price: 'all', raiting: [] }))
    setOptions(prev => ({ ...prev, category: category }))
  }

  const clearCategory = () => {
    setOptions(prev => ({ ...prev, category: '' }))
  }

  const clearSearch = () => {
    setOptions(prev => ({ ...prev, searching: false, category: '' }))
    dispatch(setSearchResult(''))
  }

  return (
    <CatalogueView
      options={options}
      setOptions={setOptions}
      finalList={finalList}
      actualSubcategories={actualSubcategories}
      handleChangeMulti={handleChangeMulti}
      handleCategoryChange={handleCategoryChange}
      handleChange={handleChange}
      clearCategory={clearCategory}
      clearSearch={clearSearch}
    />
  )
}
