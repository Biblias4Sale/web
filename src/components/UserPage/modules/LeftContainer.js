import { Col } from 'react-bootstrap'
import { Management } from './management'
// import { container, userName, optionItem } from './LeftContainerStyle'
import styles from './userPage.module.css'

export const LeftContainer = ({ user, actualView, setActualView }) => {
  const { name, lastName } = user.user

  return (
    <Col lg={3} id={styles.leftContainer}>
      <div>
        <h2 id={styles.userName}> {`${name} ${lastName}`} </h2>
        <div>
          {Management.map((option, index) =>
            <h4 className={actualView === option ? styles.optionSelectedItem : styles.optionItem} key={index} onClick={() => setActualView(option)}> {option} </h4>
          )}
        </div>
      </div>
    </Col>
  )
}
