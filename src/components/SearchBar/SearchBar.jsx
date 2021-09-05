import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { SearchBarView } from './SearchBarView'
// import { Paginate } from './modules/Pagination'

export const SearchBar = () => {
  const allProducts = useSelector(state => state.products)
  const [search, setSearch] = useState([])
  const [parsedProducts, setParsedProducts] = useState([])

  useEffect(() => {
    const arr = allProducts.map(product => {
      return {
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
    const searchResult = parsedProducts.filter(product => product.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setSearch(searchResult)
  }

  // ---------------------------------------
  // // Paginado
  // const [currentPage, setCurrentPage] = useState(1)
  // const [productsPerPage, setProductsPerPage] = useState(3)

  // const pages = (pageNumber) => {
  //   setCurrentPage(pageNumber)
  // }

  // // Paginado
  // const lastProduct = currentPage * productsPerPage
  // const firstProduct = lastProduct - productsPerPage
  // const productShow = search.slice(firstProduct, lastProduct)

  // useEffect(() => {
  //   setCurrentPage(search)
  // }, [])

  return (
    <div>
      <div>
        <SearchBarView handleChangeSearchBar={handleChangeSearchBar} search={search} />
      </div>
      {/* <Paginate
        productsPerPage={productsPerPage}
        productShow={search}
        pages={pages}
      /> */}
    </div>
  )
}
