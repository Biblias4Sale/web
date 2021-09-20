import { UserPageView } from './UserPageView'

const UserPage = (props) => {
  const section = props.location.state ? props.location.state.section : 'Datos personales'

  return (
    <UserPageView section={section} />
  )
}

export default UserPage
