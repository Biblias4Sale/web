import { Col } from 'react-bootstrap'

export const LeftContainer = ({ user }) => {
  const { name, lastName } = user.user
  return (
    <div className='d-flex' style={{ marginTop: '70px' }}>
      <Col lg={3} style={{ background: 'green', height: '100vh' }}>
        <div>
          <h3> {`${name}  ${lastName}`} </h3>
        </div>
      </Col>
    </div>
  )
}
