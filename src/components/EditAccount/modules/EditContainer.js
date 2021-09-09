import { Form, Container, Button, Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { HiOutlineMail } from 'react-icons/hi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { BsPersonSquare } from 'react-icons/bs'
import { Input } from '../../common/InputForm'
import { botton } from '../EditAccountStyle'

export const EditContainer = ({ register, handleSubmit, errors }) => {
  const oldInfo = useSelector(state => state.logged)

  return (
    <Container>
      <Col>
        <h1 className='m-3'>Modificar Cuenta</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3'>
            <Input
              icono={<BsPersonSquare size={25} />}
              placeholder='Nombre'
              type='text'
              name='name'
              errors={errors.name?.message}
              yup={{ ...register('name') }}
              defaultValue={oldInfo.name}
            />
            <Input
              icono={<BsPersonSquare size={25} />}
              placeholder='Apellido'
              type='text'
              name='lastName'
              errors={errors.lastName?.message}
              yup={{ ...register('lastName') }}
              defaultValue={oldInfo.lastName}
            />
            <Input
              icono={<HiOutlineMail size={30} />}
              placeholder='E-mail'
              type='e-mail'
              name='email'
              errors={errors.email?.message}
              yup={{ ...register('email') }}
              defaultValue={oldInfo.email}
            />
            <Input
              icono={<RiLockPasswordLine size={30} />}
              placeholder='Contraseña'
              type='password'
              name='password'
              errors={errors.password?.message}
              yup={{ ...register('password') }}
            />
            <Input
              icono={<RiLockPasswordLine size={30} />}
              placeholder='Confirmar contraseña'
              type='password'
              name='confirmPassword'
              errors={errors.confirmPassword?.message}
              yup={{ ...register('confirmPassword') }}
            />
            <Col className='m-3 justify-content-center'>
              <Row>
                <Button type='submit' style={botton} variant='pl-1 pr-1 m-3 justify-content-center'>
                  Actualizar
                </Button>
              </Row>
            </Col>
          </Form.Group>
        </Form>
      </Col>
    </Container>
  )
}
