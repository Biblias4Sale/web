import { Col } from 'react-bootstrap'
import { Management } from './management'

export const LeftContainer = ({ user, setOption }) => {
  const { name, lastName } = user.user

  const handleClick = (target) => {
    setOption(target)
  }

  return (
    <Col lg={3} style={{ height: '100vh', marginTop: '1rem', padding: '1rem', borderStyle: 'solid', borderWidth: '1px', borderColor: 'gray' }}>
      <div>
        <h2 style={{ borderBottomStyle: 'solid', padding: '1rem', marginBottom: '2rem' }}> {`${name}  ${lastName}`} </h2>
        <div>
          {Management.map((option, index) =>
            <h4 style={{ marginBottom: '1.5rem', cursor: 'pointer' }} key={index} onClick={() => handleClick(option)}> {option} </h4>
          )}
        </div>
      </div>
    </Col>
  )
}
