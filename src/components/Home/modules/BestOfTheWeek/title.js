import { Row } from 'react-bootstrap'
import { RowBests, TitleContainer } from '../../HomeStyle'

export const TitleBox = () => {
  return (
    <Row style={RowBests}>
      <div style={TitleContainer}>
        Tendencias de la semana
      </div>
    </Row>
  )
}
