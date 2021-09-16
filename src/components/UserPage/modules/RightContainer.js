import { Col } from 'react-bootstrap'
import { Management } from './management'
import { EditAccount } from '../Options/EditAccount/EditAccount'
import styles from './userPage.module.css'
import Favorites from '../Options/Favorites/Favorites'

export const RightContainer = ({ option }) => {
  return (
    <Col lg={9} id={styles.rightContainer}>
      {
        option === Management[0]
          ? <Favorites />
          : option === Management[1]
            ? <h4> Próximamente: Mis Compras </h4>
            : option === Management[2]
              ? <h4> Próximamente: Mis Reviews </h4>
              : option === Management[3]
                ? <h4> Próximamente: Métodos de pago </h4>
                : option === Management[4]
                  ? <EditAccount />
                  : <h4>Componente Default</h4>
      }
    </Col>
  )
}
