import Pagination from 'react-bootstrap/Pagination'

export const Paginate = ({ objPerPage, allObj, pages, setCurrentPage, currentPage, firstObj, lastObj }) => {
  const pageNumbers = []

  for (let i = 0; i < Math.ceil(allObj / objPerPage); i++) {
    pageNumbers.push(i + 1)
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const prevPage = () => {
    setCurrentPage(currentPage - 1)
  }

  return (
    <div className='d-flex justify-content-center'>
      <Pagination className='d-flex justify-content-center m-3'>
        {firstObj > 0
          ? <Pagination.Prev onClick={prevPage} />
          : null}
        {pageNumbers && pageNumbers.map(number => (
          <Pagination.Item className='text-center' style={{ width: '3vw', color: 'black' }} key={number} onClick={() => pages(number)}>{number}</Pagination.Item>
        ))}
        {lastObj < allObj
          ? <Pagination.Next onClick={nextPage} />
          : null}
      </Pagination>
    </div>
  )
}
