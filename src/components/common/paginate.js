import Pagination from 'react-bootstrap/Pagination'

export const Paginate = ({ objPerPage, allObj, pages, setCurrentPage, currentPage }) => {
  const pageNumbers = []

  for (let i = 0; i < Math.ceil(allObj / objPerPage); i++) {
    pageNumbers.push(i + 1)
  }

  const nextPage = () => {
    setCurrentPage(currentPage  + 1)
  }

  const prevPage = () => {
    setCurrentPage(currentPage - 1)
  }

  return (
    <div>
      <Pagination>
      <Pagination.Prev onClick={prevPage}/>
        {pageNumbers && pageNumbers.map(number => (
          <Pagination.Item key={number} onClick={() => pages(number)}>{number}</Pagination.Item>
        ))}
        <Pagination.Next onClick={nextPage}/>
      </Pagination>
    </div>
  )
}
