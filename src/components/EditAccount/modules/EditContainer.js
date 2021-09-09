import { Form, Container, Button, Col, FormControl, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
// import { HiOutlineMail } from 'react-icons/hi'
// import { AiOutlineLogin } from 'react-icons/ai'
// import { RiLockPasswordLine } from 'react-icons/ri'
// import { BsPersonSquare } from 'react-icons/bs'
// import { container, botton } from '../CreateAccount/CreateAccountStyle'

export const EditContainer = ({ register, handleSubmit, errors }) => {
  const oldInfo = useSelector(state => state.logged)

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Nombre
          </Form.Label>
          <Col sm={10}>
            <FormControl
              style={{ width: '90%' }}
              type='text'
              placeholder='Nombre'
              name='name'
              defaultValue={oldInfo.name}
              {...register('name')}
            />
            <Row className='justify-content-center m-2'>
              <h6 className='text-danger'>{errors.name?.message}</h6>
            </Row>
          </Col>

        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Apellido
          </Form.Label>
          <Col sm={10}>
            <FormControl
              style={{ width: '90%' }}
              type='text'
              placeholder='Apellido'
              name='lastName'
              {...register('lastName')}
              defaultValue={oldInfo.lastName}
            />
            <Row className='justify-content-center m-2'>
              <h6 className='text-danger'>{errors.lastName?.message}</h6>
            </Row>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <FormControl
              style={{ width: '90%' }}
              type='e-mail'
              placeholder='Email'
              name='email'
              {...register('email')}
              defaultValue={oldInfo.email}
            />
            <Row className='justify-content-center m-2'>
              <h6 className='text-danger'>{errors.email?.message}</h6>
            </Row>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <FormControl
              style={{ width: '90%' }}
              type='password'
              placeholder='Password'
              name='password'
              {...register('password')}
            />
            <Row className='justify-content-center m-2'>
              <h6 className='text-danger'>{errors.password?.message}</h6>
            </Row>
          </Col>
        </Form.Group>
        <Form.Group>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button style={{ cursor: 'pointer' }} type='submit'>Actualizar</Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  )
}
