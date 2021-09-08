import { Form, Container } from 'react-bootstrap'
import { CheckOptions } from '../../modules/optionsComponent/optionsChecks'
// import { inputFilterby } from '../../CatalogueStyle'

export const Price = ({ handleChange, options }) => {
  return (
    <Container>
      <hr />
      <Form>
        <h5>Precio</h5>
        <CheckOptions options={options} comp='30k' label='Hasta $30.000' id='30k' handleChange={handleChange} />
        <CheckOptions options={options} comp='30k/250k' label='Entre $30.000 y $ 250.000' id='30k/250k' handleChange={handleChange} />
        <CheckOptions options={options} comp='250k' label='Mas de 250.000' id='250k' handleChange={handleChange} />
        {/* <div>
          <Form.Control type='input' placeholder='Mínimo' />
          -
          <Form.Control type='input' placeholder='Máximo' />
        </div> */}
      </Form>
    </Container>

  )
}
