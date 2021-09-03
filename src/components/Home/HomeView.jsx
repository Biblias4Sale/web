import { Row } from 'react-bootstrap'
import { TopContainer } from './modules/TopContainer'
import { CenterContainer } from './modules/CenterContainer'
import { StyleContainer, MainContainer } from './HomeStyle'

export const HomeView = () => {
  return (
    <div style={StyleContainer}>
      <div style={MainContainer}>
        <Row>
          <TopContainer />
        </Row>
        <Row>
          <CenterContainer />
        </Row>
      </div>
    </div>
  )
}
