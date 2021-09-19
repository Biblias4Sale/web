import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import { LeftContainer } from './modules/LeftContainer'
import { TopContainer } from './modules/TopContainer'
import { GetUserCapitals } from '../common/getUserCapitals'
import { RightContainer } from './modules/RightContainer'

export const UserPageView = ({ section }) => {
  const user = useSelector(state => state.logged)
  const userCapitals = GetUserCapitals(user)
  const [actualView, setActualView] = useState(section)

  return (
    <div className='w-100 p-4'>
      <TopContainer userCapitals={userCapitals} />
      <Container className='d-flex' style={{ marginTop: '50px' }}>
        <LeftContainer user={user} actualView={actualView} setActualView={setActualView} />
        <RightContainer actualView={actualView} />
      </Container>
    </div>
  )
}
