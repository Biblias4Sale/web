import { Form } from 'react-bootstrap'
import { GetStarts } from '../../../common/getStars'

export const RaitngStars = ({ handleChangeMulti }) => {
  const ratings = [{ rating: 5 }, { rating: 4 }, { rating: 3 }, { rating: 2 }, { rating: 1 }]

  return (
    < >
      {ratings.map(rating => {
        return (
          <div className='d-flex p-6 mt-3' key={rating.rating} style={{ color: 'orange' }}>
            <Form.Check type='checkbox' name='raiting' id={rating.rating} onChange={event => handleChangeMulti(event)} />
            {GetStarts(rating)}
          </div>
        )
      })}

    </>
  )
}
