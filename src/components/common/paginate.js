import Pagination from 'react-bootstrap/Pagination'

export const Paginate = ({ productsPerPage, allProducts, pages }) => {
  const pageNumbers = []

  for (let i = 0; i < Math.ceil(allProducts / productsPerPage); i++) {
    pageNumbers.push(i + 1)
  }

  return (
    <div>
      <Pagination>
        {pageNumbers && pageNumbers.map(number => (
          <Pagination.Item key={number} onClick={() => pages(number)}>{number}</Pagination.Item>
        ))}
        <Pagination.Next />
      </Pagination>
    </div>
  )
}
