import { Col, FormControl, InputGroup, Row } from 'react-bootstrap'

export const Input = ({
  icono,
  placeholder,
  name,
  type,
  error,
  yup,
  defaultValue
}) => {
  return (

    <InputGroup size='lg m-2'>
      <Col>
        <Row>
          <InputGroup.Text id={name} className='bg-white' style={{ width: '10%' }}>
            {icono}
          </InputGroup.Text>
          <FormControl
            style={{ width: '90%' }}
            type={type}
            placeholder={placeholder}
            name={name}
            yup={yup}
            defaultValue={defaultValue}
          />
        </Row>
        <Row className='justify-content-center m-2'>
          <h6 className='text-danger'>{error}</h6>
        </Row>
      </Col>
    </InputGroup>
  )
}
