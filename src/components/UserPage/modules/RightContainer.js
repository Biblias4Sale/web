import { Col } from 'react-bootstrap'
import { Management } from './management'
import { EditAccount } from '../Options/EditAccount/EditAccount'
import styles from './userPage.module.css'
import Favorites from '../Options/Favorites/Favorites'

export const RightContainer = ({ actualView }) => {
  return (
    <Col lg={9} id={styles.rightContainer}>
      {
        actualView === Management[0]
          ? <EditAccount />
          : actualView === Management[1]
            ? <h4> Próximamente: Mis Compras </h4>
            : actualView === Management[2]
              ? <h4> Próximamente: Mis Reviews </h4>
              : actualView === Management[3]
                  ? <Favorites />
                  : <h4>Componente Default</h4>
      }
    </Col>
  )
}
