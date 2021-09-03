import { Container, Button, Col, FormControl, InputGroup } from 'react-bootstrap'
import { HiOutlineMail } from 'react-icons/hi'
import { GrGoogle } from 'react-icons/gr'
import { AiOutlineLogin } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { BsPersonSquare } from 'react-icons/bs'
import { style, container, botton } from './CreateAccountStyle'
import { useState } from 'react'
import { ModalUser } from '../Modals/ModalUser'
import { UseForm } from '../common/UseForm'
import { Validations } from '../common/Validations'

export const CreateAccountView = () => {
  const [modalShow, setModalShow] = useState(false)

  const {
    errors,
    values,
    onInputChange,
    handleSubmit
  } = UseForm(Validations)
  return (
    <div>
      <Container style={container}>
        <Col>
          <h1 className='m-3'>Registro</h1>
          <InputGroup size='lg m-4'>
            <InputGroup.Text id='name' className='bg-white'>
              <BsPersonSquare size={28} />
            </InputGroup.Text>
            <FormControl
              type='text'
              placeholder='Nombre'
              name={values.name}
              onChange={e => onInputChange(e)}
            />
          </InputGroup>
          <InputGroup size='lg m-4'>
            <InputGroup.Text id='lastname' className='bg-white'>
              <BsPersonSquare size={28} />
            </InputGroup.Text>
            <FormControl
              type='text'
              placeholder='Apellido'
              name={values.lastname}
              onChange={e => onInputChange(e)}
            />
          </InputGroup>
          <InputGroup size='lg m-4'>
            <InputGroup.Text id='e-mail' className='bg-white'>
              <HiOutlineMail size={30} />
            </InputGroup.Text>
            <FormControl
              type='e-mail'
              placeholder='E-mail'
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
              placeholder='Contraseña'
              name={values.password}
              onChange={e => onInputChange(e)}
            />
          </InputGroup>
          <Button type='submit' onCclick={e => handleSubmit(e)} style={botton} variant='pl-1 pr-1 w-100 text-white m-3 justify-content-center'>
            <AiOutlineLogin size={25} className='text-white' />
            REGISTRARSE
            </Button>
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
