import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import { LeftContainer } from './modules/LeftContainer'
import { TopContainer } from './modules/TopContainer'
import { GetUserCapitals } from '../common/getUserCapitals'

export const UserPageView = () => {
  const user = useSelector(state => state.logged)
  const userCapitals = GetUserCapitals(user)

  return (
    <>
      <TopContainer userCapitals={userCapitals} />
      <Container>
        <LeftContainer user={user} />
      </Container>
    </>
  )
}
