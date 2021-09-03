import { Container, Button, Col, FormControl, InputGroup } from 'react-bootstrap'
import { HiOutlineMail } from 'react-icons/hi'
import { GrGoogle } from 'react-icons/gr'
import { AiOutlineLogin } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { container, botton } from './LoginStyle'
import { useState } from 'react'
import { ModalCreateAccount } from '../Modals/ModalCreateAccount'
import { UseForm } from '../common/UseForm'
import { Validations } from '../common/Validations'

export const LoginView = () => {
  const {
    errors,
    values,
    onInputChange,
    handleSubmit
  } = UseForm(Validations)

  const [modalShow, setModalShow] = useState(false)
  return (
    <div>
      <Container style={container}>
        <Col>
          <h1 className='m-3'>Iniciar Sesion</h1>
          <InputGroup size='lg m-4'>
            <InputGroup.Text id='e-mail' className='bg-white'>
              <HiOutlineMail size={30} />
            </InputGroup.Text>
            <FormControl
              type='e-mail'
              placeholder='Ingresa tu E-mail'
              name={values.email}
              onChange={e => onInputChange(e)}
            />
          </InputGroup>
          <InputGroup size='lg m-4'>
            <InputGroup.Text id='password' className='bg-white'>
              <RiLockPasswordLine size={30} />
            </InputGroup.Text>
            <FormControl
              type='password'
              placeholder='Ingresa tu Contraseña'
              name={values.password}
              onChange={e => onInputChange(e)}
            />
          </InputGroup>
          <Button type='submit' onCclick={e => handleSubmit(e)} style={botton} variant='pl-1 pr-1 w-100 text-white m-3 justify-content-center'>
            <AiOutlineLogin size={25} className='text-white' />
            LOGIN
          </Button>
          <h4 className='m-3 text-center justify-content-center'> No tenes una Cuenta ?</h4>
          <Button style={botton} variant='pl-1 pr-1 w-100 text-white m-3 justify-content-center' onClick={() => setModalShow(true)}>Create una aqui !</Button>
          <ModalCreateAccount
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
