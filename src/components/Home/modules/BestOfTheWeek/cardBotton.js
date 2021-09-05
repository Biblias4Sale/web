import { Button, NavLink } from 'react-bootstrap'
import { CardBottomStyle, ButtonDetail } from '../../HomeStyle'

export const CardBottom = ({ product, stars }) => {
  return (
    <div style={CardBottomStyle}>
      {stars}
      <NavLink href={`/product/details/${product.id}`}>
        <Button variant='dark' style={ButtonDetail}> Detalles </Button>
      </NavLink>
    </div>
  )
}
