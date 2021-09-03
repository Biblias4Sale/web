import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const UseForm = (validations) => {
  const dispatch = useDispatch()

  const [values, setValues] = useState({
    name: '',
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
  })

  const [errors, setErrors] = useState({})

  const onInputChange = (e) => {
    e.preventDefault()
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
    setErrors(
      validations({
        ...values,
        [e.target.name]: e.target.value
      })
    )
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setValues({
      name: '',
      lastname: '',
      password: '',
      email: ''
      //       description: '',
      //       image: '',
      //       country: '',
      //       learn: [],
      //       birthday: '',
      //       identification: '',
      //       teach: [],
      //       bank: '',
      //       cbu: ''
    })
  }

  return { handleSubmit, onInputChange, errors, values }
}
