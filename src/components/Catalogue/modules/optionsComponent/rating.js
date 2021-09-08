import { Form } from 'react-bootstrap'
import { GetStarts } from '../../../common/getStars'

export const RaitngStars = ({ handleChangeMulti }) => {
  const rating = [{ points: 5 }, { points: 4 }, { points: 3 }, { points: 2 }, { points: 1 }]

  return (
    < >
      {rating.map(rating => {
        return (
          <div className='d-flex p-6 mt-3' key={rating} style={{ color: 'orange' }}>
            <Form.Check type='checkbox' name='raiting' id={rating.points} onChange={event => handleChangeMulti(event)} />
            {GetStarts(rating)}
          </div>
        )
      })}

    </>
  )
}
