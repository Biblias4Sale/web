import { Col } from 'react-bootstrap'
import { Management } from './management'

export const LeftContainer = ({ user, setOption }) => {
  const { name, lastName } = user.user

  const handleClick = (target) => {
    setOption(target)
  }

  return (
    <Col lg={3} style={{ height: '100vh' }}>
      <div>
        <h2> {`${name}  ${lastName}`} </h2>
        <div>
          {Management.map((option, index) =>
            <h4 key={index} onClick={() => handleClick(option)}> {option} </h4>
          )}
        </div>
      </div>
    </Col>
  )
}
