import CatalogueView from './Catalogue.view.js'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/actions/index'

export const Catalogue = () => {
  const allProducts = useSelector((state) => state.products)
  const dispatch = useDispatch()

  const [options, setOptions] = useState({
    category: 'Camaras',
    subCategory: [],
    price: 'all',
    raiting: 'all',
    order: 'id',
    direction: 'asc'
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

    // OBTIENE SUB-CATEGORIAS

    // FILTRA por CATEGORIA
    filtredByCategory = allProducts.filter(product => product.subCategory.category.name === options.category)

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
    if (options.raiting === 'all') filtredByRaiting = filtredByPrice
    else if (options.raiting === '5') filtredByRaiting = filtredByPrice.filter(product => product.points === '5')
    else if (options.raiting === '4') filtredByRaiting = filtredByPrice.filter(product => product.points === '4')
    else if (options.raiting === '3') filtredByRaiting = filtredByPrice.filter(product => product.points === '3')
    else if (options.raiting === '2') filtredByRaiting = filtredByPrice.filter(product => product.points === '2')
    else if (options.raiting === '1') filtredByRaiting = filtredByPrice.filter(product => product.points === '1')

    setFinalList(filtredByRaiting)
  }, [allProducts, options.category, options.subCategory, options.price, options.raiting])

  const handleSubCategoryChange = (event) => {
    let newArray = [...options.subCategory, event.target.id]
    setOptions(prev => ({ ...prev, subCategory: newArray }))
    if (options.subCategory.includes(event.target.id)) {
      newArray = newArray.filter(type => type !== event.target.id)
    }
  }

  const handleChange = (event) => {
    if (options.price === event.target.id) setOptions(prev => ({ ...prev, [event.target.name]: 'all' }))
    else setOptions(prev => ({ ...prev, [event.target.name]: event.target.id }))
  }

  const handleCategoryChange = (category) => {
    setOptions(prev => ({ ...prev, category: category }))
  }

  return <CatalogueView options={options} finalList={finalList} handleSubCategoryChange={handleSubCategoryChange} handleCategoryChange={handleCategoryChange} handleChange={handleChange} />
}
