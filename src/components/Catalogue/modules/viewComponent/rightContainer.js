import { Col } from 'react-bootstrap'
import { Pages } from '../Pages'
import { SelectOptions } from '../SelectOptions'
import { NoProductToShow } from './noProducts'
import btnBlue from '../../../../assets/btn_close_blue.png'

export const RightContainer = ({ options, finalList, setOptions, clearCategory, clearSearch }) => {
  return (
    <Col lg={9}>
      <div className='d-flex mb-2'>

        {options.searching
          ? (
            <>
              <h3 style={{ marginRight: '0.5rem' }}>{options.searching}</h3>
              <img src={btnBlue} alt='' height='30px' onClick={clearSearch} style={{ marginRight: '1rem' }} />
              {/* <button type='button' class='btn-close' aria-label='Close' onClick={clearSearch} /> */}
              {options.category
                ? (
                  <>
                    <h5 style={{ marginRight: '0.5rem' }}>sólo en {options.category}</h5>
                    <img src={btnBlue} alt='' height='30px' onClick={clearCategory} />
                  </>
                  )
                : null}
            </>
            )
          : options.category
            ? (
              <>
                <h3 style={{ marginRight: '0.5rem' }}>{options.category}</h3>
                <img src={btnBlue} alt='' height='30px' onClick={clearCategory} />
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
