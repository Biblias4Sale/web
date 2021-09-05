import { BsStarFill } from 'react-icons/bs'

export const GetStarts = (product) => {
  const points = product.points
  const stars = []

  for (let i = 0; i < points; i++) {
    stars.push(<BsStarFill />)
  }

  return (
    stars
  )
}
