import { Col } from 'react-bootstrap'
import { Pages } from '../Pages'
import { SelectOptions } from '../SelectOptions'

export const RightContainer = ({ options, finalList }) => {
  return (
    <Col lg={9}>
      <div className='d-flex justify-content-between'>
        <h3>{options.category}</h3>
      </div>
      <SelectOptions />
      <Pages finalList={finalList} />
    </Col>
  )
}
