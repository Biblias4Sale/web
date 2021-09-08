import { Row } from 'react-bootstrap'
import { TopContainer } from './modules/TopContainer'
import { CenterContainer } from './modules/CenterContainer'
import { BestOfTheWeek } from './modules/BestOfTheWeek'
import { MainContainer } from './HomeStyle'

export const HomeView = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div style={MainContainer}>
        <Row>
          <TopContainer />
        </Row>
        <Row>
          <CenterContainer />
        </Row>
        <Row>
          <BestOfTheWeek />
        </Row>
      </div>
    </div>
  )
}
