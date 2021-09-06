import { Link } from 'react-router-dom'

export const MapCategories = ({ allCategories }) => {
  return (
    <>
      {allCategories.map(item =>
        <Link
          key={item}
          to={{
            pathname: '/catalogo',
            state: { category: item }
          }}
          className='align-self-center text-decoration-none text-black'
        >
          {item}
        </Link>
      )}
    </>
  )
}
