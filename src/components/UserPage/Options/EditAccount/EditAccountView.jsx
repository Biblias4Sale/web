import { Form, Container, Button, Col, Row } from 'react-bootstrap'
import { DeleteUser } from './DeleteUser/DeleteUser'
import { botton, title } from './EditAccountStyle'

export const EditAccountView = ({ register, handleSubmit, errors, oldInfo, setShowModal, showModal }) => {
  return (
    <Container>
      <h3 style={title}>Modificar Cuenta</h3>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type='text'
              placeholder='Nombre'
              name='name'
              defaultValue={oldInfo.name}
              {...register('name')}
            />
            <Row className='justify-content-center m-2'>
              <h6 className='text-danger'>{errors.name?.message}</h6>
            </Row>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type='text'
              placeholder='Apellido'
              name='lastName'
              defaultValue={oldInfo.lastName}
              {...register('lastName')}
            />
            <Row className='justify-content-center m-2'>
              <h6 className='text-danger'>{errors.lastName?.message}</h6>
            </Row>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='e-mail'
              placeholder='E-mail'
              name='email'
              defaultValue={oldInfo.email}
              {...register('email')}
            />
            <Row className='justify-content-center m-2'>
              <h6 className='text-danger'>{errors.email?.message}</h6>
            </Row>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type='tel'
              placeholder='Teléfono'
              name='phone'
              {...register('phone')}
            />
            <Row className='justify-content-center m-2'>
              <h6 className='text-danger'>{errors.phone?.message}</h6>
            </Row>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type='password'
              placeholder='Contraseña'
              name='password'
              {...register('password')}
            />
            <Row className='justify-content-center m-2'>
              <h6 className='text-danger'>{errors.password?.message}</h6>
            </Row>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Confirmar Contraseña</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirmar contraseña'
              name='confirmPassword'
              {...register('confirmPassword')}
            />
            <Row className='justify-content-center m-2'>
              <h6 className='text-danger'>{errors.confirmPassword?.message}</h6>
            </Row>
          </Form.Group>
        </Row>
        <Form.Group>
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type='text'
            placeholder='Dirección'
            name='address'
            {...register('address')}
          />
          <Row className='justify-content-center m-2'>
            <h6 className='text-danger'>{errors.address?.message}</h6>
          </Row>
        </Form.Group>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Ciudad</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ciudad'
              name='city'
              {...register('city')}
            />
            <Row className='justify-content-center m-2'>
              <h6 className='text-danger'>{errors.city?.message}</h6>
            </Row>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Provincia</Form.Label>
            <Form.Control
              type='text'
              placeholder='Provincia'
              name='province'
              {...register('province')}
            />
            <Row className='justify-content-center m-2'>
              <h6 className='text-danger'>{errors.province?.message}</h6>
            </Row>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Código Postal</Form.Label>
            <Form.Control
              type='text'
              placeholder='Código Postal'
              name='cp'
              {...register('cp')}
            />
            <Row className='justify-content-center m-2'>
              <h6 className='text-danger'>{errors.cp?.message}</h6>
            </Row>
          </Form.Group>
        </Row>
        <Col>
          <Row>
            <Button type='submit' style={botton} variant='pl-1 pr-1 m-3 justify-content-center'>
              Actualizar
            </Button>
          </Row>
          <Row className='d-flex justify-content-center'>
            <div
              style={{ fontWeight: 'bolder', textDecoration: 'underline' }}
              onClick={() => setShowModal(true)}
            >
              <DeleteUser
                show={showModal}
                setShowModal={setShowModal}
              />
              <h6>
                Eliminar cuenta
              </h6>
            </div>

          </Row>
        </Col>
      </Form>
    </Container>
  )
}
