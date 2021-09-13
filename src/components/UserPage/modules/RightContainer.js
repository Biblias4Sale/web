import { Col } from 'react-bootstrap'
import { Management } from './management'
import { EditAccount } from '../Options/EditAccount/EditAccount'
import { container } from './RightContainerStyle'

export const RightContainer = ({ option }) => {
  return (
    <Col lg={9} style={container}>
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
