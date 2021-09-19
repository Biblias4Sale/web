import { Container } from 'react-bootstrap'
import { LeftImg } from './leftImg'
import { CenterImg } from './centerImg'
import { RightImg } from './rightImg'
import { CentralContainerStyle } from '../../HomeStyle'

export const CenterContainer = () => {
  return (
    <Container style={CentralContainerStyle}>
      <LeftImg />
      <CenterImg />
      <RightImg />
    </Container>
  )
}
