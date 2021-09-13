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
            ? <h4> Próximamente: Mis Compras </h4>
            : option === Management[2]
              ? <h4> Próximamente: Mis Reviews </h4>
              : option === Management[3]
                ? <h4> Próximamente: Métodos de pago </h4>
                : <h4> COMPONENTE default </h4>
      }
    </Col>
  )
}
