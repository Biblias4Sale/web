import { Form, Container, Button, Col, FormControl, InputGroup, Row } from 'react-bootstrap'
import { HiOutlineMail } from 'react-icons/hi'
import { GrGoogle } from 'react-icons/gr'
import { AiOutlineLogin } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { BsPersonSquare } from 'react-icons/bs'
import { container, botton } from './CreateAccountStyle'

export const CreateAccountView = ({ setShowModal, register, handleSubmit, errors }) => {
  return (
    <Container style={container}>
      <Col>
        <h1 className='m-3'>Registro</h1>
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
            </InputGroup>
            <Col className='m-3 justify-content-center'>
              <Row>
                <Button type='submit' style={botton} variant='pl-1 pr-1 m-3 justify-content-center'>
                  <AiOutlineLogin size={25} className='text-white' style={{ cursor: 'pointer' }} />
                  REGISTRARSE
                </Button>
              </Row>
              <Row className='d-flex justify-content-center'>
                <h6> Ya tenes una Cuenta ? {' '}
                  <a
                    href
                    style={{ fontWeight: 'bolder' }}
                    onClick={() => setShowModal('init')}
                  >
                    Create una aqui !
                  </a>
                </h6>
              </Row>
              <Row> <h4 className='m-1 text-center'> O </h4></Row>
              <Row>
                <Button style={botton} variant='pl-1 pr-1 m-3 justify-content-center'>
                  <GrGoogle size={20} />
                  Ingresar con Google
                </Button>
              </Row>
            </Col>
          </Form.Group>
        </Form>
      </Col>
    </Container>
  )
}
