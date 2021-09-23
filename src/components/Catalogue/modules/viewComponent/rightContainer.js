import { Col } from 'react-bootstrap'
import { Pages } from '../Pages'
import { SelectOptions } from '../SelectOptions'
import { NoProductToShow } from './noProducts'
import { AiOutlineCloseSquare } from 'react-icons/ai'

export const RightContainer = ({ options, finalList, setOptions, clearCategory, clearSearch }) => {
  return (
    <Col lg={9}>
      <div className='d-flex mb-2' style={{ marginLeft: '20px' }}>

        {options.searching
          ? (
            <>
              <h3 style={{ marginRight: '0.5rem' }}>{options.searching}</h3>
              <AiOutlineCloseSquare alt='' height='30px' onClick={clearSearch} style={{ marginRight: '1rem', cursor: 'pointer' }} />
              {options.category
                ? (
                  <>
                    <h5 style={{ marginRight: '0.5rem' }}>sólo en {options.category}</h5>
                    <AiOutlineCloseSquare size={30} alt='' height='30px' onClick={clearCategory} style={{ cursor: 'pointer', marginLeft: '10px' }} />
                  </>
                  )
                : null}
            </>
            )
          : options.category
            ? (
              <>
                <h3 style={{ marginRight: '0.5rem' }}>{options.category}</h3>
                <AiOutlineCloseSquare alt='' size={30} onClick={clearCategory} style={{ cursor: 'pointer', marginLeft: '10px' }} />
                {/* <button type='button' class='btn-close' aria-label='Close' onClick={clearSearch} /> */}
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
