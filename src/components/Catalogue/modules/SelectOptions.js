import React from 'react'
import Select from 'react-select/creatable'
import { Col, Container, Row } from 'react-bootstrap'

export const SelectOptions = ({ options, setOptions }) => {
  const selections = [
    // { value: 'Relevancia', label: 'Relevancia' },
    // { value: 'Nuevos', label: 'Recien Llegados' },
    { value: 'priceAsc', label: 'Precio, menor a mayor' },
    { value: 'priceDesc', label: 'Precio, mayor a menor' }
    // { value: 'Aleatorio', label: 'Aleatorio' }
  ]
  return (
    <Container>
      <Row>
        <Col style={{ display: 'flex', justifyContent: 'end' }} lg={8}><label>Ordenar por:</label></Col>
        <Col lg={4}>
          <Select defaultValue='precio' style={{ marginBottom: '10px' }} options={selections} onChange={(event) => setOptions((prev) => ({ ...prev, orderBy: event.value }))} />
        </Col>
      </Row>
    </Container>
  )
}
export default SelectOptions
