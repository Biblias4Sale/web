import { Col } from 'react-bootstrap'
import { TopImg } from './topImg'
import { BottomImg } from './bottomImg'
import { RightImg } from './rightImg'
import { StyleContainer, TopContainerStyle } from '../../HomeStyle'

export const TopContainer = () => {
  return (
    <div style={StyleContainer}>
      <div style={TopContainerStyle}>
        <Col xs={12} sm={10} md={8} lg={5}>
          <TopImg />
          <BottomImg />
        </Col>
        <Col xs={12} sm={10} md={8} lg={7}>
          <RightImg />
        </Col>
      </div>
    </div>
  )
}
