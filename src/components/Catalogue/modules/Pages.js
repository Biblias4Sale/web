import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
// import { getProducts } from '../../../redux/actions/index'
import Paginate from './Pagination'
import { NavLink } from 'react-router-dom'
import { Product } from '../../Products/Product'
import { productsCat, paginationStyle } from '../CatalogueStyle'

export const Pages = ({ finalList }) => {
  // const dispatch = useDispatch()
  // const allProducts = useSelector((state) => state.products)
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(15)
  const lastProduct = currentPage * productsPerPage
  const firstProduct = lastProduct - productsPerPage
  const product = finalList.slice(firstProduct, lastProduct)

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div>
      <div style={productsCat}>
        {product?.map((obj) => {
          return (
            <NavLink to={`/product/details/${obj.id}`} key={obj.id}>
              <Product
                name={obj.model} points={obj.points} id={obj.id} key={obj.id} img={obj.img}
              />
            </NavLink>
          )
        })}
      </div>
      <hr style={{ width: '100%' }} />
      <div style={paginationStyle}>
        <div>
          <h6><a>Mostrando {firstProduct + 1} - {lastProduct} de {finalList.length} ítems</a></h6>
        </div>
        <div>
          <Paginate
            productsPerPage={productsPerPage}
            allProducts={finalList.length}
            pages={pages}
          />
        </div>
      </div>
    </div>
  )
}
