import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../redux/actions/index'
import Paginate from './Pagination'
import { NavLink } from 'react-router-dom'
import Product from '../../Products/Product'
import { productsCat, paginationStyle } from '../CatalogueStyle'

export const Pages = () => {
  const dispatch = useDispatch()
  const allProducts = useSelector((state) => state.products)
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(15)
  const lastProduct = currentPage * productsPerPage
  const firstProduct = lastProduct - productsPerPage
  const product = allProducts.slice(firstProduct, lastProduct)

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  return (
    <div>
      <div style={productsCat}>
        {product?.map((obj) => {
          return (
            <NavLink to={`/product/details/${obj.id}`} key={obj.id}>
              <Product
                name={obj.name} points={obj.points} id={obj.id} key={obj.id}
              />
            </NavLink>
          )
        })}
      </div>
      <hr style={{ width: '100%' }} />
      <div style={paginationStyle}>
        <div>
          <h6><a>Mostrando {firstProduct + 1} - {lastProduct} de {allProducts.length} ítems</a></h6>
        </div>
        <div>
          <Paginate
            productsPerPage={productsPerPage}
            allProducts={allProducts.length}
            pages={pages}
          />
        </div>
      </div>
    </div>
  )
}
