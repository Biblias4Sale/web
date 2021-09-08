import { Col } from 'react-bootstrap'
import { Pages } from '../Pages'
import { SelectOptions } from '../SelectOptions'

export const RightContainer = ({ options, finalList, setOptions, clearCategory, clearSearch }) => {
  return (
    <Col lg={9}>
      <div className='d-flex justify-content-between mb-2'>
        {options.searching
          ? (
            <>
              <h3>{options.searching}</h3><button onClick={clearSearch}>X</button>
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
      <Pages finalList={finalList} />
    </Col>
  )
}
