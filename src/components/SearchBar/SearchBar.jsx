import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { SearchBarView } from './SearchBarView'
import { Paginate } from './modules/Pagination'

export const SearchBar = () => {
  const allProducts = useSelector(store => store.products)
  const [search, setSearch] = useState([])

  const handleChangeSearchBar = e => {
    // if (search.length === 0) setSearch([])
    const searchResult = allProducts.filter(product => product?.name.toLowerCase().includes(e.target.value.toLowerCase()))

    setSearch(searchResult)
  }
  
    //---------------------------------------

  // Paginado
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(3)

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  // Paginado
  const lastProduct = currentPage * productsPerPage
  const firstProduct = lastProduct - productsPerPage
  const productShow = search.slice(firstProduct, lastProduct)

  useEffect(() => {
    setCurrentPage(search)
  }, [])

  return (
    <div>
      <div>
        <SearchBarView handleChangeSearchBar={handleChangeSearchBar} search={search} />
      </div>
      <Paginate
        productsPerPage={productsPerPage}
        productShow={search}
        pages={pages}
      />
    </div>
  )
}
