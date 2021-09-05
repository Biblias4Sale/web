import Pagination from 'react-bootstrap/Pagination'

export const Paginate = ({ productsPerPage, productShow, pages }) => {
  const pageNumbers = []
  for (let i = 0; i < Math.ceil(productShow / productsPerPage); i++) {
    pageNumbers.push(i + 1)
  }

  return (
    <div>
      <Pagination>
        {pageNumbers && pageNumbers.map(number => (
          <Pagination.Item key={number} onClick={() => pages(number)}>{number}</Pagination.Item>
        ))}
      </Pagination>
    </div>
  )
}
