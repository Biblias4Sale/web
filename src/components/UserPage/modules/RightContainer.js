import { Col } from 'react-bootstrap'
import { Management } from './management'
import { EditAccount } from '../Options/EditAccount/EditAccount'

export const RightContainer = ({ option }) => {
  return (
    <Col lg={9} style={{ padding: '1rem', height: '100vh', borderStyle: 'solid', borderWidth: '1px', marginTop: '1rem', marginLeft: '1rem', borderColor: 'gray' }}>
      {
        option === Management[0]
          ? <EditAccount />
          : option === Management[1]
            ? <h2> COMPONENTE Reviews </h2>
            : option === Management[2]
              ? <h2> COMPONENTE Mis Compras </h2>
              : option === Management[3]
                ? <h2> COMPONENTE Métodos de pago </h2>
                : <h2> COMPONENTE default </h2>
      }
    </Col>
  )
}
