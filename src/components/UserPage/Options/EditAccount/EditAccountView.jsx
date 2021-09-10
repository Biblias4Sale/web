import { Form, Container, Button, Col, Row, InputGroup, FormControl } from 'react-bootstrap'
import { HiOutlineMail } from 'react-icons/hi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { BsPersonSquare } from 'react-icons/bs'
import { container, botton } from './EditAccountStyle'

export const EditAccountView = ({ register, handleSubmit, errors, oldInfo, setShowModal }) => {
  return (
    <Container style={container}>
      <Col>
        <h1 className='m-3'>Modificar Cuenta</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3'>
            <InputGroup size='lg m-2'>
              <Col>
                <Row>
                  <InputGroup.Text id='name' className='bg-white' style={{ width: '10%' }}>
                    <BsPersonSquare size={28} />
                  </InputGroup.Text>
                  <FormControl
                    style={{ width: '90%' }}
                    type='text'
                    placeholder='Nombre'
                    name='name'
                    defaultValue={oldInfo.name}
                    {...register('name')}
                  />
                </Row>
                <Row className='justify-content-center m-2'>
                  <h6 className='text-danger'>{errors.name?.message}</h6>
                </Row>
              </Col>
            </InputGroup>
            <InputGroup size='lg m-2'>
              <Col>
                <Row>
                  <InputGroup.Text id='lastname' className='bg-white' style={{ width: '10%' }}>
                    <BsPersonSquare size={28} />
                  </InputGroup.Text>
                  <FormControl
                    style={{ width: '90%' }}
                    type='text'
                    placeholder='Apellido'
                    name='lastName'
                    defaultValue={oldInfo.lastName}
                    {...register('lastName')}
                  />
                </Row>
                <Row className='justify-content-center m-2'>
                  <h6 className='text-danger'>{errors.lastName?.message}</h6>
                </Row>
              </Col>
            </InputGroup>
            <InputGroup size='lg m-2'>
              <Col>
                <Row>
                  <InputGroup.Text id='email' className='bg-white' style={{ width: '10%' }}>
                    <HiOutlineMail size={30} />
                  </InputGroup.Text>
                  <FormControl
                    style={{ width: '90%' }}
                    type='e-mail'
                    placeholder='E-mail'
                    name='email'
                    defaultValue={oldInfo.email}
                    {...register('email')}
                  />
                </Row>
                <Row className='justify-content-center m-2'>
                  <h6 className='text-danger'>{errors.email?.message}</h6>
                </Row>
              </Col>
            </InputGroup>
            <InputGroup size='lg m-2'>
              <Col>
                <Row>
                  <InputGroup.Text id='password' className='bg-white' style={{ width: '10%' }}>
                    <RiLockPasswordLine size={30} />
                  </InputGroup.Text>
                  <FormControl
                    style={{ width: '90%' }}
                    type='password'
                    placeholder='Contraseña'
                    name='password'
                    {...register('password')}
                  />
                </Row>
                <Row className='justify-content-center m-2'>
                  <h6 className='text-danger'>{errors.password?.message}</h6>
                </Row>
              </Col>
              <InputGroup size='lg m-2'>
                <Col>
                  <Row>
                    <InputGroup.Text id='confirmPassword' className='bg-white' style={{ width: '10%' }}>
                      <RiLockPasswordLine size={30} />
                    </InputGroup.Text>
                    <FormControl
                      style={{ width: '90%' }}
                      type='password'
                      placeholder='Confirmar contraseña'
                      name='confirmPassword'
                      {...register('confirmPassword')}
                    />
                  </Row>
                  <Row className='justify-content-center m-2'>
                    <h6 className='text-danger'>{errors.confirmPassword?.message}</h6>
                  </Row>
                </Col>
              </InputGroup>
            </InputGroup>
            <Col className='m-3 justify-content-center'>
              <Row>
                <Button type='submit' style={botton} variant='pl-1 pr-1 m-3 justify-content-center'>
                  Actualizar
                </Button>
              </Row>
              <Row className='d-flex justify-content-center'>

                <div
                  href
                  style={{ fontWeight: 'bolder', textDecoration: 'underline' }}
                  onClick={() => setShowModal('delete')}
                >
                  <h6>
                    Eliminar cuenta
                  </h6>
                </div>

              </Row>
            </Col>
          </Form.Group>
        </Form>
      </Col>
    </Container>
  )
}
