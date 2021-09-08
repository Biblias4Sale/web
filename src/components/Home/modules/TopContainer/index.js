import { Col } from 'react-bootstrap'
import { TopImg } from './topImg'
import { BottomImg } from './bottomImg'
import { RightImg } from './rightImg'
import { TopContainerStyle } from '../../HomeStyle'

export const TopContainer = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div style={TopContainerStyle}>
        <Col xs={12} sm={9} md={5} lg={5}>
          <TopImg />
          <BottomImg />
        </Col>
        <Col xs={12} sm={9} md={7} lg={7}>
          <RightImg />
        </Col>
      </div>
    </div>
  )
}
