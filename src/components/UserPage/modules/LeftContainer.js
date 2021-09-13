import { Col } from 'react-bootstrap'
import { Management } from './management'
import { container, userName, optionItem } from './LeftContainerStyle'

export const LeftContainer = ({ user, setOption }) => {
  const { name, lastName } = user.user

  const handleClick = (target) => {
    setOption(target)
  }

  return (
    <Col lg={3} style={container}>
      <div>
        <h2 style={userName}> {`${name}  ${lastName}`} </h2>
        <div>
          {Management.map((option, index) =>
            <h4 style={optionItem} key={index} onClick={() => handleClick(option)}> {option} </h4>
          )}
        </div>
      </div>
    </Col>
  )
}
