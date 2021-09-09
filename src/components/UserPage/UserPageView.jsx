import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import { LeftContainer } from './modules/LeftContainer'
import { TopContainer } from './modules/TopContainer'
import { GetUserCapitals } from '../common/getUserCapitals'
import { RightContainer } from './modules/RightContainer'

export const UserPageView = () => {
  const user = useSelector(state => state.logged)
  const userCapitals = GetUserCapitals(user)

  const [option, setOption] = useState('')

  return (
    <>
      <TopContainer userCapitals={userCapitals} />
      <Container className='d-flex' style={{ marginTop: '70px' }}>
        <LeftContainer user={user} setOption={setOption} />
        <RightContainer option={option} />
      </Container>
    </>
  )
}
