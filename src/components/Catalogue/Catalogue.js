import CatalogueView from './Catalogue.view.js'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/actions/index'

export const Catalogue = () => {
  const allProducts = useSelector((state) => state.products)
  const dispatch = useDispatch()

  const [options, setOptions] = useState({
    category: 'Cámaras',
    subCategory: [],
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

    // FILTRA por CATEGORIA
    filtredByCategory = allProducts.filter(product => product.category === options.category)

    // OBTIENE SUB-CATEGORIAS

    // FILTRA por SUB-CATEGORIA
    if (options.subCategory.length === 0) {
      filtredBySubCategory = filtredByCategory
    } else {
      filtredBySubCategory = filtredByCategory.filter(product => options.subCategory.includes(product.subCategory))
    }

    setFinalList(filtredBySubCategory)
  }, [allProducts, options.category, options.subCategory])

  const handleOptionsChange = (event) => {
    let newArray = [...options.subCategory, event.target.id]
    setOptions(prev => ({ ...prev, subCategory: newArray }))
    if (options.subCategory.includes(event.target.id)) {
      newArray = newArray.filter(type => type !== event.target.id)
    }
    console.log(newArray)
    console.log(options)
  }

  // console.log(options)

  return <CatalogueView options={options} finalList={finalList} handleOptionsChange={handleOptionsChange} />
}

export default Catalogue
