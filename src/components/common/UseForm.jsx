import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const UseForm = () => {
  const [values, setValues] = useState('')

  const formik = useFormik({
    values: {
      firstName: '',
      lastname: '',
      password: '',
      email: ''
      //     image: '',
      //     country: '',
      //     learn: [],
      //     birthday: '',
      //     identification: '',
      //     teach: [],
      //     bank: '',
      //     cbu: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required')
    })
    // onSubmit: values => {
    //     alert(JSON.stringify(values, null, 2));
    //   }
  })

  const onInputChange = (e) => {
    e.preventDefault()
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    alert('Enviando info')

    setValues({
      firstname: '',
      lastname: '',
      password: '',
      email: ''
    })
  }

  return { handleSubmit, onInputChange, formik }
}
