import { Col, FormControl, InputGroup, Row } from 'react-bootstrap'

export const Input = ({
  icono,
  placeholder,
  name,
  type,
  errors,
  handleChange,
  handleBlur
}) => {

  console.log(handleBlur)
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
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            onBlur={(e) => handleBlur(e.target[name], e.target.value)}
          />
        </Row>
        <Row className='justify-content-center m-2'>
          <h6 className='text-danger'>{errors[name] && errors[name]}</h6>
        </Row>
      </Col>
    </InputGroup>
  )
}