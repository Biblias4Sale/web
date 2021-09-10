import { Statements } from './pagesComponent/statements'
import { MapProduct } from './pagesComponent/mapProducts'
import { Pagination } from './pagesComponent/pagination'

export const Pages = ({ finalList }) => {
  const {
    productsPerPage,
    lastProduct,
    firstProduct,
    product,
    pages,
    setCurrentPage,
    currentPage
  } = Statements(finalList)

  return (
    <div>
      <MapProduct product={product} />
      <hr />
      <Pagination
        firstProduct={firstProduct}
         lastProduct={lastProduct}
          finalList={finalList}
        productsPerPage={productsPerPage}
         pages={pages}
         setCurrentPage={setCurrentPage}
         currentPage={currentPage}
      />
    </div>
  )
}
