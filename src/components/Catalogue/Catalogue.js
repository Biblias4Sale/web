import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../Products/Product'
import { getProducts } from '../../redux/actions'
import { NavLink } from 'react-router-dom'
import Paginate from './Pagination'
import { Container, Col, Row } from 'react-bootstrap'
import { paginationStyle, headerProducts, productsCat } from './CatalogueStyle'
import Select from 'react-select/creatable'

export const Catalogue = () => {
  const dispatch = useDispatch()
  const allProducts = useSelector((state) => state.products)
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(15)
  const lastProduct = currentPage * productsPerPage
  const firstProduct = lastProduct - productsPerPage
  const product = allProducts.slice(firstProduct, lastProduct)

  const options = [
    { value: 'Relevancia', label: 'Relevancia' },
    { value: 'Nuevos', label: 'Recien Llegados' },
    { value: 'PrecioMayor', label: 'Precio, mayor a menor' },
    { value: 'PrecioMenor', label: 'Precio, menor a mayor' },
    { value: 'Aleatorio', label: 'Aleatorio' }

  ]
  const pages = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div>
      <Container style={productsCat}>
        <Row />
        <Col lg={3} />
        <Col lg={9}>
          <div style={headerProducts}>
            <h3>Cámaras</h3>
          </div>
          <Select options={options} />
          <div style={productsCat}>
            {product?.map((obj) => {
              return (
                <NavLink to={'/details/' + obj.id} key={obj.id}>
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
        </Col>
      </Container>
    </div>
  )
}

export default Catalogue
