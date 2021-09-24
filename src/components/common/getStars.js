import { BsStarFill } from 'react-icons/bs'

export const GetStarts = (product) => {
  const points = product.rating
  const stars = []

  for (let i = 0; i < points; i++) {
    stars.push(<BsStarFill key={i} />)
  }

  return (
    stars
  )
}
