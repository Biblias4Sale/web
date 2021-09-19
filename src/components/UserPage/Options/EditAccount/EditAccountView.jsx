import { Form, Container, Button, Col, Row } from 'react-bootstrap'
import { DeleteUser } from './DeleteUser/DeleteUser'
import { botton, title } from './EditAccountStyle'

export const EditAccountView = ({
  handleSubmit,
  errors,
  setModalShow,
  modalShow,
  handleChange,
  errorAuth,
  formData
}) => {
  return (
    <Container className='d-flex flex-wrap'>
      <h3 style={title}>Modificar datos personales</h3>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Form.Group as={Col} lg={6} sm={12}>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type='text'
              placeholder='Nombre'
              name='name'
              value={formData.name}
              onChange={(event) => handleChange(event.target.name, event.target.value)}
            />
            <Row className='justify-content-center m-2'>
              <h6 className='text-danger'>{errors.name && errors.name}</h6>
            </Row>
          </Form.Group>
          <Form.Group as={Col} lg={6} sm={12}>
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type='text'
              placeholder='Apellido'
              name='lastName'
              value={formData.lastName}
              onChange={(event) => handleChange(event.target.name, event.target.value)}
            />
            <Row className='justify-content-center m-2'>
              <h6 className='text-danger'>{errors.lastName && errors.lastName}</h6>
            </Row>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} lg={6} sm={12}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='e-mail'
              placeholder='E-mail'
              name='email'
              value={formData.email}
              onChange={(event) => handleChange(event.target.name, event.target.value)}
            />
            <Row className='justify-content-center m-2'>
              <h6 className='text-danger'>{errors.email && errors.email}</h6>
            </Row>
          </Form.Group>
          <Form.Group as={Col} lg={6} Lg={12}>
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type='tel'
              placeholder='Teléfono'
              name='phone'
              value={formData.phone}
              onChange={(event) => handleChange(event.target.name, event.target.value)}
            />
            <Row className='justify-content-center m-2'>
              <h6 className='text-danger'>{errors.phone && errors.phone}</h6>
            </Row>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} lg={6} sm={12}>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type='password'
              placeholder='Contraseña'
              name='password'
              onChange={(event) => handleChange(event.target.name, event.target.value)}
            />
            <Row className='justify-content-center m-2'>
              <h6 className='text-danger'>{errors.password && errors.password}</h6>
            </Row>
          </Form.Group>
          <Form.Group as={Col} lg={6} Lg={12}>
            <Form.Label>Confirmar Contraseña</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirmar contraseña'
              name='confirmPassword'
              onChange={(event) => handleChange(event.target.name, event.target.value)}
            />
            <Row className='justify-content-center m-2'>
              <h6 className='text-danger'>{errorAuth && errorAuth}</h6>
            </Row>
          </Form.Group>
        </Row>
        <Form.Group lg={6} sm={12}>
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type='text'
            placeholder='Dirección'
            name='address'
            value={formData.address}
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
              value={formData.city}
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
              value={formData.province}
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
              value={formData.cp}
              onChange={(event) => handleChange(event.target.name, event.target.value)}
            />
            <Row className='justify-content-center m-2'>
              <h6 className='text-danger'>{errors.cp && errors.cp}</h6>
            </Row>
          </Form.Group>
        </Row>
        <Col>
          <Row>
            {!errors.name && !errors.lastName && !errors.phone && !errors.email && !errors.password && !errors.confirmPassword
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
          <Row className='d-flex justify-content-center'>
            <div>
              <DeleteUser
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
              <h6 style={{ cursor: 'pointer', fontWeight: 'bolder', textDecoration: 'underline' }} onClick={() => setModalShow(true)}>
                Eliminar cuenta
              </h6>
            </div>

          </Row>
        </Col>
      </Form>
    </Container>
  )
}
