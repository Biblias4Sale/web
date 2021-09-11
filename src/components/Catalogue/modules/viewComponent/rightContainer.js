import { Col } from 'react-bootstrap'
import { Pages } from '../Pages'
import { SelectOptions } from '../SelectOptions'
import { NoProductToShow } from './noProducts'

export const RightContainer = ({ options, finalList, setOptions, clearCategory, clearSearch }) => {
  return (
    <Col lg={9}>
      <div className='d-flex mb-2'>
        {options.searching
          ? (

            <>
              <h3>{options.searching}</h3>
              <button type='button' class='btn-close' aria-label='Close' onClick={clearSearch} />
            </>

            )
          : options.category
            ? (
              <>
                <h3>{options.category}</h3><button onClick={clearCategory}>X</button>
              </>
              )
            : null}
      </div>
      <SelectOptions options={options} setOptions={setOptions} />
      {
        finalList.length === 0
          ? <NoProductToShow clearSearch={clearSearch} clearCategory={clearCategory} />
          : (
            <Pages finalList={finalList} />
            )
      }
    </Col>
  )
}
