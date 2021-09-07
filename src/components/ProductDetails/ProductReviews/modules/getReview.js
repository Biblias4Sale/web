import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getReviews } from '../../../../redux/actions'
import { ReviewContainer } from './reviewContainer'

export const GetReview = () => {
  const dispatch = useDispatch()
  const review = useSelector(state => state.review)

  useEffect(() => {
    dispatch(getReviews())
  }, [dispatch])

  return (

    <div>
      <ReviewContainer review={review} />
    </div>
  )
}
