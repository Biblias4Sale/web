import React from 'react'
import { useForm } from 'react-hook-form'
import { connect, useDispatch } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { setLogged } from '../../redux/actions'

export const Form = (props) => {
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required()
  })

  const dispatch = useDispatch()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  // Submit your data into Redux store
  const onSubmit = (data) => {
    dispatch(setLogged(data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName')} defaultValue={props.firstName} />
      <p>{errors.firstName?.message}</p>

      <input {...register('age')} defaultValue={props.age} />
      <p>{errors.age?.message}</p>

      <input type='submit' />
    </form>
  )
}

// Connect your component with redux
connect(({ firstName }) => ({ firstName }), setLogged)(Form)
