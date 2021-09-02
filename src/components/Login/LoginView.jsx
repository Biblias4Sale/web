import { Container, Button, Col, FormControl, InputGroup } from 'react-bootstrap'
import { HiOutlineMail } from 'react-icons/hi'
import { GrGoogle } from 'react-icons/gr'
import { AiOutlineLogin } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'

import { style, container, botton } from './LoginStyle'
import { Link } from 'react-router-dom'

export const LoginView = () => {
  return (
    <div>
      <Container style={container}>
        <Col>
          <h1 className='d-flex  m-3 justify-content-center'>Iniciar Sesion</h1>
          <InputGroup size='lg m-4'>
            <InputGroup.Text id='e-mail' className='bg-white'>
              <HiOutlineMail size={30} />
            </InputGroup.Text >
            <FormControl type='e-mail' placeholder='Ingresa tu E-mail' />
          </InputGroup>
          <InputGroup size='lg m-4'>
            <InputGroup.Text id='password' className='bg-white'>
              <RiLockPasswordLine size={30} />
            </InputGroup.Text>
            <FormControl type='password' placeholder='Ingresa tu Contraseña' />
          </InputGroup>

          <div className='m-3 w-25'>
            <Button style={botton} variant='pl-1 pr-1 w-100 text-white'><AiOutlineLogin size={25} className='text-white' />LOGIN</Button>
          </div>
          <Link to='/create'>
            <h4 className='m-1 text-center justify-content-center'> No tenes una Cuenta ? Create una aqui ! </h4>
          </Link>
          <h4 className='m-1 text-center'> O </h4>
          <div className='m-3 w-25 '>
            <Button style={botton} variant='pl-1 pr-1 w-100 text-white   m-3 justify-content-center'><GrGoogle size={20} className='m-1 text-white' />Ingresar con Google</Button>
          </div>
        </Col>
      </Container>
    </div>
  )
}
