import { Paginate } from '../../../common/paginate'

export const Pagination = ({ finalList, productsPerPage, pages, setCurrentPage, currentPage }) => {
  return (
    <div>
      <div>
        {/* <h6><a>Mostrando {firstProduct + 1} - {finalList.length} de {finalList.length} ítems</a></h6> */}
      </div>
      <div>
        <Paginate
          objPerPage={productsPerPage}
          allObj={finalList.length}
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  )
}
