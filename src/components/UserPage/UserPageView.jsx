import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import { LeftContainer } from './modules/LeftContainer'
import { TopContainer } from './modules/TopContainer'
import { GetUserCapitals } from '../common/getUserCapitals'
import { RightContainer } from './modules/RightContainer'

export const UserPageView = () => {
  const user = useSelector(state => state.logged)
  const userCapitals = GetUserCapitals(user)

  return (
    <>
      <TopContainer userCapitals={userCapitals} />
      <Container className='d-flex' style={{ marginTop: '70px' }}>
        <LeftContainer user={user} />
        <RightContainer />
      </Container>
    </>
  )
}
