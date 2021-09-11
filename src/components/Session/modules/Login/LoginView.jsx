import { Form, Container, Button, Col, Row, FormControl, InputGroup } from 'react-bootstrap'
import { HiOutlineMail } from 'react-icons/hi'
import { GrGoogle } from 'react-icons/gr'
import { AiOutlineLogin } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { container, botton } from './LoginStyle'

export const LoginView = ({
  setShowModal,
  handleSubmit,
  handleChange,
  errors,
  errorAuth
}) => {
  return (
    <Container style={container}>
      <Col>
        <h1 className='m-3'>Iniciar sesión</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='m-4'>
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
                    onChange={(event) => handleChange(event.target.name, event.target.value)}
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
                    onChange={(event) => handleChange(event.target.name, event.target.value)}
                  />
                </Row>
                <Row className='justify-content-center m-2'>
                  <h6 className='text-danger'>{errors.password && errors.password}</h6>
                </Row>
              </Col>
            </InputGroup>
            <Row className='justify-content-center m-2 text-center'>
              <h4 className='text-danger'>{errorAuth && errorAuth}</h4>
            </Row>
          </Form.Group>
          <Col className='m-3 justify-content-center'>
            <Row>
              {!errors.email && !errors.password
                ? (
                  <Button
                    type='submit'
                    style={botton}
                    variant='pl-1 pr-1 m-3 text-center justify-content-center'
                  >
                    <AiOutlineLogin size={25} className='text-white' />
                    INCIAR SESIÓN
                  </Button>)
                : (
                  <Button
                    disabled
                    type='submit'
                    style={botton}
                    variant='pl-1 pr-1 m-3 text-center justify-content-center'
                  >
                    <AiOutlineLogin size={25} className='text-white' />
                    INCIAR SESIÓN
                  </Button>
                  )}
            </Row>
            <Row className='d-flex justify-content-center'>
              <h6> ¿No tenés cuenta? {' '}
                <a
                  href
                  style={{ fontWeight: 'bolder', textDecoration: 'underline' }}
                  onClick={() => setShowModal('create')}
                >
                  Create una acá!
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
        </Form>
      </Col>
    </Container>
  )
}
