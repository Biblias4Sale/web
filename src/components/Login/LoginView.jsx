import { Form, Container, Button, Col, FormControl, InputGroup } from 'react-bootstrap'
import { HiOutlineMail } from 'react-icons/hi'
import { GrGoogle } from 'react-icons/gr'
import { AiOutlineLogin } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { container, botton } from './LoginStyle'

export const LoginView = (props) => {
  return (
    <div>
      <Container style={container}>
        <Col>
          <h1 className='m-3'>Iniciar Sesion</h1>
          <Form onSubmit={props.handleSubmit}>
            <Form.Group className='mb-3'>
              <InputGroup size='lg m-4'>
                <InputGroup.Text id='email' className='bg-white'>
                  <HiOutlineMail size={30} />
                </InputGroup.Text>
                <FormControl
                  type='e-mail'
                  placeholder='E-mail'
                  name='email'
                  {...props.register('email')}
                />
                <p className='text-danger'>{props.errors.email?.message}</p>
              </InputGroup>
              <InputGroup size='lg m-4'>
                <InputGroup.Text id='password' className='bg-white'>
                  <RiLockPasswordLine size={30} />
                </InputGroup.Text>
                <FormControl
                  type='password'
                  placeholder='Contraseña'
                  name='password'
                  {...props.register('password')}
                />
                <p className='text-danger'>{props.errors.password?.message}</p>
              </InputGroup>
            </Form.Group>
            <Button
              type='submit'
              style={botton} variant='pl-1 pr-1 w-100 text-white m-3 justify-content-center'
            >
              <AiOutlineLogin size={25} className='text-white' style={{ cursor: 'pointer' }} />
              LOGIN
            </Button>
            <h4 className='m-3 text-center justify-content-center'> No tenes una Cuenta ?</h4>
            <Button style={botton} variant='pl-1 pr-1 w-100 text-white m-3 justify-content-center' onClick={() => props.setShowModal('create')}>Create una aqui !</Button>

            <h4 className='m-3 text-center'> O </h4>
            <Button style={botton} variant='pl-1 pr-1 w-100 text-white m-3 justify-content-center'>
              <GrGoogle size={20} className='m-1 text-white' style={{ cursor: 'pointer' }} />
              Ingresar con Google
            </Button>
          </Form>
        </Col>
      </Container>
    </div>
  )
}
