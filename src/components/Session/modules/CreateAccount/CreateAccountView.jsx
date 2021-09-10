import { Form, Container, Button, Col, Row, InputGroup, FormControl } from 'react-bootstrap'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlineLogin } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { BsPersonSquare } from 'react-icons/bs'
import { container, botton } from './CreateAccountStyle'

export const CreateAccountView = ({
  setShowModal,
  handleSubmit,
  handleChange,
  errors,
  errorAuth
}) => {
  return (
    <Container style={container}>
      <Col>
        <h1 className='m-3'>Registro</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3'>
            <InputGroup size='lg m-2'>
              <Col>
                <Row>
                  <InputGroup.Text className='bg-white' style={{ width: '10%' }}>
                    <BsPersonSquare size={28} />
                  </InputGroup.Text>
                  <FormControl
                    style={{ width: '90%' }}
                    type='text'
                    placeholder='Nombre'
                    name='name'
                    onChange = {(event) => handleChange(event.target.name, event.target.value)}
                  />
                </Row>
                <Row className='justify-content-center m-2'>
                <h6 className='text-danger'>{errors.name && errors.name}</h6>
                </Row>
              </Col>
            </InputGroup>
            <InputGroup size='lg m-2'>
              <Col>
                <Row>
                  <InputGroup.Text className='bg-white' style={{ width: '10%' }}>
                    <BsPersonSquare size={28} />
                  </InputGroup.Text>
                  <FormControl
                    style={{ width: '90%' }}
                    type='text'
                    placeholder='Apellido'
                    name='lastName'
                    onChange = {(event) => handleChange(event.target.name, event.target.value)}
                  />
                </Row>
                <Row className='justify-content-center m-2'>
                <h6 className='text-danger'>{errors.lastName && errors.lastName}</h6>
                </Row>
              </Col>
            </InputGroup>
            <InputGroup size='lg m-2'>
              <Col>
                <Row>
                  <InputGroup.Text className='bg-white' style={{ width: '10%' }}>
                    <HiOutlineMail size={30} />
                  </InputGroup.Text>
                  <FormControl
                    style={{ width: '90%' }}
                    type='e-mail'
                    placeholder='E-mail'
                    name='email'
                    onChange = {(event) => handleChange(event.target.name, event.target.value)}
                  />
                </Row>
                <Row className='justify-content-center m-2'>
                  <h6 className='text-danger'>{errors.email && errors.email}</h6>
                </Row>
              </Col>
            </InputGroup>
            <InputGroup size='lg m-2'>
              <Col>
                <Row>
                  <InputGroup.Text className='bg-white' style={{ width: '10%' }}>
                    <RiLockPasswordLine size={30} />
                  </InputGroup.Text>
                  <FormControl
                    style={{ width: '90%' }}
                    type='password'
                    placeholder='Contraseña'
                    name='password'
                    onChange = {(event) => handleChange(event.target.name, event.target.value)}

                  />
                </Row>
                <Row className='justify-content-center m-2'>
                  <h6 className='text-danger'>{errors.password && errors.password}</h6>
                </Row>
              </Col>
            </InputGroup>
            <InputGroup size='lg m-2'>
              <Col>
                <Row>
                  <InputGroup.Text className='bg-white' style={{ width: '10%' }}>
                    <RiLockPasswordLine size={30} />
                  </InputGroup.Text>
                  <FormControl
                    style={{ width: '90%' }}
                    type='password'
                    placeholder='Confirma tu contraseña'
                    name='confirmPassword'
                    onChange = {(event) => handleChange(event.target.name, event.target.value)}

                  />
                </Row>
                <Row className='justify-content-center m-2'>
                  <h6 className='text-danger'>{errors.confirmPassword && errors.confirmPassword}</h6>
                </Row>
              </Col>
            </InputGroup>
            <Row className='justify-content-center m-2 text-center'>
              <h4 className='text-danger'>{errorAuth && errorAuth}</h4>
            </Row>
          </Form.Group>
            <Col className='m-3 justify-content-center'>
              <Row>
              {!errors.name && !errors.lastName && !errors.email && !errors.password && !errors.confirmPassword?   
                <Button type='submit' style={botton} variant='pl-1 pr-1 m-3 justify-content-center'>
                  <AiOutlineLogin size={25} className='text-white' style={{ cursor: 'pointer' }} />
                  REGISTRARSE
                </Button>
            :
                <Button type='submit' disabled style={botton} variant='pl-1 pr-1 m-3 justify-content-center'>
                  <AiOutlineLogin size={25} className='text-white' style={{ cursor: 'pointer' }} />
                  REGISTRARSE
                </Button>
            }

              </Row>
              <Row className='d-flex justify-content-center'>
                <h6> Ya tenes una Cuenta ? {' '}
                  <a
                    href
                    style={{ fontWeight: 'bolder', textDecoration: 'underline' }}
                    onClick={() => setShowModal('init')}
                  >
                    Ingresa aqui !
                  </a>
                </h6>
              </Row>
            </Col>
        </Form>
      </Col>
    </Container>
  )
}
