import { Col } from 'react-bootstrap'
import { Management } from './management'
import { EditAccount } from '../Options/EditAccount/EditAccount'
import styles from './userPage.module.css'
import Favorites from '../Options/Favorites/Favorites'
import AddReview from '../Options/AddReviews/AddReview'
import { MyShopping } from '../Options/MyShopping/MyShopping'

export const RightContainer = ({ actualView }) => {
  return (
    <Col lg={9} id={styles.rightContainer}>
      {
        actualView === Management[0]
          ? <MyShopping />
          : actualView === Management[1]
            ? <Favorites />
            : actualView === Management[2]
              ? <AddReview />
              : actualView === Management[3]
                ? <EditAccount />
                : <h4>Componente Default</h4>
      }
    </Col>
  )
}
