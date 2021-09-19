import { Paginate } from '../../../../common/paginate'

export const Pagination = ({ reviews, reviewsPerPage, pages, setCurrentPage, currentPage, firstObj, lastObj }) => {
  return (
    <div>
      <div>
        {/* <h6><a>Mostrando {firstProduct + 1} - {finalList.length} de {finalList.length} ítems</a></h6> */}
      </div>
      <div>
        <Paginate
          objPerPage={reviewsPerPage}
          allObj={reviews.length}
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          firstObj={firstObj}
          lastObj={lastObj}
        />
      </div>
    </div>
  )
}
