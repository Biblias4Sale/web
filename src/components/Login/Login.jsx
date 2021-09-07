import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { LoginView } from './LoginView'
import { setLogged } from '../../redux/actions'

const validations = yup.object().shape({
  email: yup.string().email('Por favor ingrese un mail valido').required('Por favor ingrese un mail'),
  // confirmEmail: yup.string().email().required().oneOf([yup.ref("email"), null], "Emails must match"),
  password: yup.string().required('Por favor ingrese una contraseña')
  // .matches('^(?=.*[A-Za-z])("?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$',
  //   'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character')
  // confirmPassword: yup.string().required().oneOf([yup.ref('password'), null], 'Passwords must match')
})

export const Login = ({ setShowModal, handleClose }) => {
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validations)
  })

  // Submit your data into Redux store
  const onSubmit = (loginInfo) => {
    window.alert('Iniciando sesion')
    handleClose()
    dispatch(setLogged(loginInfo))
  }
  return (
    <div>
      <LoginView
        setShowModal={setShowModal}
        register={register}
        handleSubmit={handleSubmit(onSubmit)}
        errors={errors}
      />
    </div>
  )
}
