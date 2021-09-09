import { Col } from 'react-bootstrap'
import { Management } from './management'

export const RightContainer = ({ option }) => {
  return (
    <Col lg={9} style={{ background: 'red', height: '100vh' }}>
      {
        option === Management[0]
          ? <h2>COMPONENTE  Gestión de cuenta</h2>
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
