import { Form, Container, Button, Col, FormControl, InputGroup } from 'react-bootstrap'
import { HiOutlineMail } from 'react-icons/hi'
import { GrGoogle } from 'react-icons/gr'
import { AiOutlineLogin } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { BsPersonSquare } from 'react-icons/bs'
import { container, botton } from './CreateAccountStyle'
import { useState } from 'react'
import { ModalUser } from '../Modals/ModalUser'
import { ModalCreateAccount } from '../Modals/ModalCreateAccount'

export const CreateAccountView = (props) => {
  const [modalShow, setModalShow] = useState(false)

  return (
    <Container style={container}>
      <Col>
        <h1 className='m-3'>Registro</h1>
        <Form onSubmit={props.handleSubmit}>
          <Form.Group className='mb-3'>
            <InputGroup size='lg m-4'>
              <InputGroup.Text id='name' className='bg-white'>
                <BsPersonSquare size={28} />
              </InputGroup.Text>
              <FormControl
                type='text'
                placeholder='Nombre'
                name='name'
                {...props.register('name')}

              />
              <p className='text-danger'>{props.errors.name?.message}</p>
            </InputGroup>
            <InputGroup size='lg m-4'>
              <InputGroup.Text id='lastname' className='bg-white'>
                <BsPersonSquare size={28} />
              </InputGroup.Text>
              <FormControl
                type='text'
                placeholder='Apellido'
                name='lastName'
                {...props.register('lastName')}

              />
              <p className='text-danger'>{props.errors.lastName?.message}</p>
            </InputGroup>
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
            <Button
              type='submit' style={botton} variant='pl-1 pr-1 w-100 text-white m-3 justify-content-center'
              //onClick={() => setModalShow(true)}
            >
              <AiOutlineLogin size={25} className='text-white' style={{ cursor: 'pointer' }} />
              REGISTRARSE
            </Button>
            {/* <ModalCreateAccount
              show={modalShow}
              onHide={() => setModalShow(false)}
            /> */}
            <h4 className='m-3 text-center justify-content-center'> Ya tienes una Cuenta ?</h4>
            <Button
              style={botton} variant='pl-1 pr-1 w-100 text-white m-3 justify-content-center'
              onClick={() => setModalShow(true)}
            >Inicia sesion ahora !
            </Button>
            <ModalUser
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Form.Group>
        </Form>
      </Col>
    </Container>
  )
}
