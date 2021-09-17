import { Form, Container, Button, Col, Row } from 'react-bootstrap'
import { botton, title } from './CheckInfoStyle'

export const CheckInfoView = ({
  handleSubmit,
  errors,
  oldInfo,
  handleChange
}) => {
  return (
    <Container className='d-flex flex-wrap'>
      <h6 style={title}>Para continuar con tu compra es necesario que agregues los siguientes datos personales:</h6>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Form.Group as={Col} lg={6} Lg={12}>
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type='tel'
              placeholder='Teléfono'
              name='phone'
              defaultValue={oldInfo.phone}
              onChange={(event) => handleChange(event.target.name, event.target.value)}
            />
            <Row className='justify-content-center m-2'>
              <h6 className='text-danger'>{errors.phone && errors.phone}</h6>
            </Row>
          </Form.Group>
        </Row>
        <Form.Group lg={6} sm={12}>
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type='text'
            placeholder='Dirección'
            name='address'
            defaultValue={oldInfo.address}
            onChange={(event) => handleChange(event.target.name, event.target.value)}
          />
          <Row className='justify-content-center m-2'>
            <h6 className='text-danger'>{errors.address && errors.address}</h6>
          </Row>
        </Form.Group>
        <Row>
          <Form.Group as={Col} lg={6} sm={12}>
            <Form.Label>Ciudad</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ciudad'
              name='city'
              defaultValue={oldInfo.city}
              onChange={(event) => handleChange(event.target.name, event.target.value)}
            />
            <Row className='justify-content-center m-2'>
              <h6 className='text-danger'>{errors.city && errors.city}</h6>
            </Row>
          </Form.Group>
          <Form.Group as={Col} lg={3} sm={6}>
            <Form.Label>Provincia</Form.Label>
            <Form.Control
              type='text'
              placeholder='Provincia'
              name='province'
              defaultValue={oldInfo.province}
              onChange={(event) => handleChange(event.target.name, event.target.value)}
            />
            <Row className='justify-content-center m-2'>
              <h6 className='text-danger'>{errors.province && errors.province}</h6>
            </Row>
          </Form.Group>
          <Form.Group as={Col} lg={3} sm={6}>
            <Form.Label>Código Postal</Form.Label>
            <Form.Control
              type='text'
              placeholder='Código Postal'
              name='cp'
              defaultValue={oldInfo.cp}
              onChange={(event) => handleChange(event.target.name, event.target.value)}
            />
            <Row className='justify-content-center m-2'>
              <h6 className='text-danger'>{errors.cp && errors.cp}</h6>
            </Row>
          </Form.Group>
        </Row>
        <Col>
          <Row>
            {!errors.address && !errors.phone && !errors.cp && !errors.city && !errors.province
              ? (
                <Button type='submit' style={botton} variant='pl-1 pr-1 m-3 justify-content-center'>
                  Actualizar
                </Button>
                )
              : (
                <Button type='submit' disabled style={botton} variant='pl-1 pr-1 m-3 justify-content-center'>
                  Actualizar
                </Button>)}
          </Row>
        </Col>
      </Form>
    </Container>
  )
}
