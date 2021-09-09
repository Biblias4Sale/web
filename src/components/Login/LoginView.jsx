import { Form, Container, Button, Col, FormControl, InputGroup, Row } from 'react-bootstrap'
import { HiOutlineMail } from 'react-icons/hi'
import { GrGoogle } from 'react-icons/gr'
import { AiOutlineLogin } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { container, botton } from './LoginStyle'
import { Input } from '../common/InputForm'

export const LoginView = ({
  setShowModal,
  register,
  handleSubmit,
  errors,
  errorAuth
}) => {
  return (
    <Container style={container}>
      <Col>
        <h1 className='m-3'>Iniciar Sesion</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='m-4'>
            <Input
              icono={<HiOutlineMail size={30} />}
              placeholder='E-mail'
              type='e-mail'
              name='email'
              error={errors.email?.message}
              yup={{ ...register('email') }}
            />
            <Input
              icono={<RiLockPasswordLine size={30} />}
              placeholder='Contraseña'
              type='password'
              name='confirmPassword'
              error={errors.confirmPassword?.message}
              yup={{ ...register('confirmPassword') }}
            />
            <Row className='justify-content-center m-2 text-center'>
              <h4 className='text-danger'>{errorAuth && errorAuth}</h4>
            </Row>
          </Form.Group>
          <Col className='m-3 justify-content-center'>
            <Row>

              <Button
                onClick={handleSubmit}
                type='submit'
                style={botton}
                variant='pl-1 pr-1 m-3 text-center justify-content-center'
              >
                <AiOutlineLogin size={25} className='text-white' />
                LOGIN
              </Button>
            </Row>
            <Row className='d-flex justify-content-center'>
              <h6> No tenes una Cuenta ? {' '}
                <a
                  href
                  style={{ fontWeight: 'bolder', textDecoration: 'underline' }}
                  onClick={() => setShowModal('create')}
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
        </Form>
      </Col>
    </Container>
  )
}
