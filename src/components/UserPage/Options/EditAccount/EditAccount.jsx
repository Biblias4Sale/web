import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { EditAccountView } from './EditAccountView'
import { editUser } from '../../../../redux/actions/index'
import Alert from 'react-bootstrap/Alert'
import { Button } from 'react-bootstrap'

const validations = yup.object().shape({
  name: yup.string().required('Por favor ingrese tu nombre'),
  lastName: yup.string().required('Por favor ingrese tu apellido'),
  email: yup.string().email('Por favor ingrese un mail valido').required('Por favor ingrese un mail'),
  // confirmEmail: yup.string().email().required().oneOf([yup.ref("email"), null], "Emails must match"),
  password: yup.string().required('Por favor ingrese una contraseña').min(6, 'Por favor ingrese una contraseña de al menos 6 caracteres'),
  confirmPassword: yup.string().required('Por favor confirme su contraseña').oneOf([yup.ref('password'), null], 'La contraseña debe coincidir')
})

export const EditAccount = () => {
  const [showModal, setShowModal] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const dispatch = useDispatch()
  const oldInfo = useSelector(state => state.logged)

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validations)
  })

  // Submit your data into Redux store
  const onSubmit = (data) => {
    dispatch(editUser(oldInfo.user.id, data, oldInfo.token))
  }

  return (
    <div>
      <EditAccountView
        register={register}
        handleSubmit={handleSubmit(onSubmit)}
        errors={errors}
        oldInfo={oldInfo.user}
        setShowModal={setShowModal}
        showNodal={showModal}
      />
      <Alert show={showAlert} variant='light'>
        <Alert.Heading>Datos actualizados exitosamente</Alert.Heading>
        <hr />
        <div className='d-flex justify-content-end'>
          <Button onClick={() => setShowAlert(false)}>
            Cerrar
          </Button>
        </div>
      </Alert>
    </div>
  )
}
