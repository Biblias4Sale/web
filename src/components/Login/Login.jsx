import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { LoginView } from './LoginView'
import { setLogged } from '../../redux/actions'

const validations = yup.object().shape({
  email: yup.string().email('Por favor ingrese un mail valido').required('Por favor ingrese un mail'),
  // confirmEmail: yup.string().email().required().oneOf([yup.ref("email"), null], "Emails must match"),
  password: yup.string().required('Por favor ingrese una contraseña').min(6, 'Por favor ingrese una contraseña de al menos 6 caracteres')
  // .matches('/^(?=.*)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/', 'La contraseña debe contener al menos 6 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula')
  // confirmPassword: yup.string().required().oneOf([yup.ref('password'), null], 'La contraseña debe coincidir')
})

export const Login = ({ setShowModal, handleClose }) => {
  const dispatch = useDispatch()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validations)
  })

  // Submit your data into Redux store
  const onSubmit = (loginInfo) => {
    dispatch(setLogged(loginInfo))
    setTimeout(() => setShowModal('welcome'), 15000)
    // handleClose()
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
