import { Form } from 'react-bootstrap'
import { checkGoto } from '../../CatalogueStyle'

export const CheckOptions = (props) => {
  return (
    <div style={checkGoto}>
      {props.options.price === 'all' || props.options.price === props.comp
        ? <Form.Check type='checkbox' label={props.label} name='price' id={props.id} onChange={event => props.handleChange(event)} />
        : <Form.Check disabled type='checkbox' label={props.label} name='price' id={props.id} />}
    </div>
  )
}
