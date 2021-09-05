import CatalogueView from './Catalogue.view.js'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/actions/index'
import { ApiURL } from '../../config/config'

export const Catalogue = (props) => {
  const allProducts = useSelector((state) => state.products)

  const [actualSubcategories, setActualSubcategories] = useState([])

  const dispatch = useDispatch()

  const [options, setOptions] = useState({
    category: props.location.state.category,
    subCategory: [],
    price: 'all',
    raiting: []
    // order: 'id',
    // direction: 'asc'
  })

  const [finalList, setFinalList] = useState(allProducts)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  useEffect(() => {
    let filtredByCategory
    let filtredBySubCategory
    let filtredByPrice
    let filtredByRaiting

    // FILTRA por CATEGORIA
    filtredByCategory = allProducts.filter(product => product.subCategory.category.name === options.category)

    // OBTIENE SUB-CATEGORIAS de la CATEGORIA ACTUAL
    const getSubs = async () => {
      const response = await axios.get(`${ApiURL}/categories/getSub/${options.category}`)
      setActualSubcategories(response.data)
    }
    getSubs()

    // FILTRA por SUB-CATEGORIA
    if (options.subCategory.length === 0) {
      filtredBySubCategory = filtredByCategory
    } else {
      filtredBySubCategory = filtredByCategory.filter(product => options.subCategory.includes(product.subCategory.name))
    }

    // FILTRA por PRECIO
    if (options.price === 'all') filtredByPrice = filtredBySubCategory
    else if (options.price === '30k') filtredByPrice = filtredBySubCategory.filter(product => product.price <= 30000)
    else if (options.price === '30k/250k') filtredByPrice = filtredBySubCategory.filter(product => product.price > 30000 && product.price <= 250000)
    else if (options.price === '250k') filtredByPrice = filtredBySubCategory.filter(product => product.price > 250000)

    // FILTRA por PUNTAJE
    if (options.raiting.length === 0) filtredByRaiting = filtredByPrice
    else filtredByRaiting = filtredByPrice.filter(product => options.raiting.includes(product.points))

    setFinalList(filtredByRaiting)
  }, [allProducts, options.category, options.subCategory, options.price, options.raiting])

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
    setOptions(prev => ({ ...prev, category: category }))
  }

  return <CatalogueView options={options} finalList={finalList} actualSubcategories={actualSubcategories} handleChangeMulti={handleChangeMulti} handleCategoryChange={handleCategoryChange} handleChange={handleChange} />
}
