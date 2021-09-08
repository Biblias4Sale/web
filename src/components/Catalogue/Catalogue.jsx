import { useEffect } from 'react'
import { getProducts } from '../../redux/actions/index'
import { Statements } from './modules/main/statements'
import { getSubs } from './modules/main/getSubs'
import { filterBySubCategory } from './modules/main/filterBySubCategory.js'
import { filterByPrice } from './modules/main/filterByPrice.js'
import { filterByPoints } from './modules/main/filterByPoints.js'
import { orderByPrice } from './modules/main/orderByPrice.js'
import { CatalogueView } from './Catalogue.view.jsx'

export const Catalogue = (props) => {
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
    getSubs(setActualSubcategories, options)

    const filtredByCategory = allProducts.filter(product => product.subCategory.category.name === options.category)

    const setFilterBySubCategory = filterBySubCategory(options, filtredByCategory)
    const filtredBySubCategory = setFilterBySubCategory

    const setFilterByPrice = filterByPrice(options, filtredBySubCategory)
    const filtredByPrice = setFilterByPrice

    const setFilterByPoints = filterByPoints(options, filtredByPrice)
    const filtredByRaiting = setFilterByPoints

    const setOrderByPrice = orderByPrice(options, filtredByRaiting)
    const ordererByPrice = setOrderByPrice

    setFinalList(ordererByPrice)
  }, [allProducts, options, setActualSubcategories, setFinalList])

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

  return (
    <CatalogueView
      options={options}
      setOptions={setOptions}
      finalList={finalList}
      actualSubcategories={actualSubcategories}
      handleChangeMulti={handleChangeMulti}
      handleCategoryChange={handleCategoryChange}
      handleChange={handleChange}
    />
  )
}
