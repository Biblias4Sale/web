import { BsStarFill } from 'react-icons/bs'

export const GetStarts = (product) => {
  const rating = product.rating
  const stars = []

  for (let i = 0; i < rating; i++) {
    stars.push(<BsStarFill key={i} />)
  }

  return (
    stars
  )
}
