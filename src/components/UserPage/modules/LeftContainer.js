import { Col } from 'react-bootstrap'
import { Management } from './management'
// import { container, userName, optionItem } from './LeftContainerStyle'
import styles from './userPage.module.css'

export const LeftContainer = ({ user, setOption }) => {
  const { name, lastName } = user.user

  const handleClick = (target) => {
    setOption(target)
  }

  return (
    <Col lg={3} id={styles.leftContainer}>
      <div>
        <h2 id={styles.userName}> {`${name}  ${lastName}`} </h2>
        <div>
          {Management.map((option, index) =>
            <h4 className={styles.optionItem} key={index} onClick={() => handleClick(option)}> {option} </h4>
          )}
        </div>
      </div>
    </Col>
  )
}
