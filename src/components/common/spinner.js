import { Spinner } from 'react-bootstrap'

export const Loading = () => {
  const acc = [1, 2, 3]
  const spinners = acc.map(count =>
    <Spinner animation='grow' variant='dark' size='sm' key={count} />
  )

  return (
    spinners
  )
}
