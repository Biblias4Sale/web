import { Container, Button, Col, FormControl, InputGroup } from 'react-bootstrap'
import { HiOutlineMail } from 'react-icons/hi'
import { GrGoogle } from 'react-icons/gr'
import { AiOutlineLogin } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { BsPersonSquare } from 'react-icons/bs'
import { style, container, botton } from './CreateAccountStyle'
import { useState } from 'react'
import { ModalUser } from '../Modals/ModalUser'

export const CreateAccountView = () => {
  const [modalShow, setModalShow] = useState(false)
  return (
    <div>
      <Container style={container}>
        <Col>
          <h1 className='m-3'>Registro</h1>
          <InputGroup size='lg m-4'>
            <InputGroup.Text id='name' className='bg-white'>
              <BsPersonSquare size={28} />
            </InputGroup.Text>
            <FormControl type='text' placeholder='Nombre' />
          </InputGroup>
          <InputGroup size='lg m-4'>
            <InputGroup.Text id='lastname' className='bg-white'>
              <BsPersonSquare size={28} />
            </InputGroup.Text>
            <FormControl type='text' placeholder='Apellido' />
          </InputGroup>
          <InputGroup size='lg m-4'>
            <InputGroup.Text id='e-mail' className='bg-white'>
              <HiOutlineMail size={30} />
            </InputGroup.Text>
            <FormControl type='e-mail' placeholder='E-mail' />
          </InputGroup>
          <InputGroup size='lg m-4'>
            <InputGroup.Text id='password' className='bg-white'>
              <RiLockPasswordLine size={30} />
            </InputGroup.Text>
            <FormControl type='password' placeholder='Contraseña' />
          </InputGroup>
          <Button style={botton} variant='pl-1 pr-1 w-100 text-white m-3 justify-content-center'><AiOutlineLogin size={25} className='text-white' />LOGIN</Button>
          <h4 className='m-3 text-center justify-content-center'> Ya tienes una Cuenta ?</h4>
          <Button style={botton} variant='pl-1 pr-1 w-100 text-white m-3 justify-content-center' onClick={() => setModalShow(true)}>Inicia sesion ahora !</Button>
          <ModalUser
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <h4 className='m-3 text-center'> O </h4>
          <Button style={botton} variant='pl-1 pr-1 w-100 text-white m-3 justify-content-center'><GrGoogle size={20} className='m-1 text-white' />Ingresar con Google</Button>
        </Col>
      </Container>
    </div>
  )
}
