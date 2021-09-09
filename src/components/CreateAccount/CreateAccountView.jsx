import { Form, Container, Button, Col, Row } from 'react-bootstrap'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlineLogin } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { BsPersonSquare } from 'react-icons/bs'
import { container, botton } from './CreateAccountStyle'
import { Input } from '../common/Input'

export const CreateAccountView = ({
  setShowModal,
  register,
  handleSubmit,
  errors
}) => {
  return (
    <Container style={container}>
      <Col>
        <h1 className='m-3'>Registro</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3'>
            <Input
              icono={<BsPersonSquare size={25} />}
              placeholder='Nombre'
              type='text'
              name='name'
              error={errors.name?.message}
              yup={{ ...register('name') }}
            />
            <Input
              icono={<BsPersonSquare size={25} />}
              placeholder='Apellido'
              type='text'
              name='lastName'
              error={errors.lastName?.message}
              yup={{ ...register('lastName') }}
            />
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
              name='password'
              error={errors.password?.message}
              yup={{ ...register('password') }}
            />
            <Input
              icono={<RiLockPasswordLine size={30} />}
              placeholder='Confirmar contraseña'
              type='password'
              name='confirmPassword'
              error={errors.confirmPassword?.message}
              yup={{ ...register('confirmPassword') }}
            />
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
                    style={{ fontWeight: 'bolder', textDecoration: 'underline' }}
                    onClick={() => setShowModal('init')}
                  >
                    Ingresa aqui !
                  </a>
                </h6>
              </Row>
            </Col>
          </Form.Group>
        </Form>
      </Col>
    </Container>
  )
}
