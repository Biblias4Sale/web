import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import { ApiURL } from '../../../../config/config';
import { CreateAccountView } from './CreateAccountView';
import { createUser } from '../../../../redux/actions';

export const CreateAccount = ({ setShowModal }) => {
  const dispatch = useDispatch();

  const [errorAuth, setErrorAuth] = useState('');
  const { handleSubmit } = useForm();

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: true,
    lastName: true,
    email: true,
    password: true,
    confirmPassword: true,
  });

  // Submit your data into Redux store
  const onSubmit = async () => {
    try {
      const response = await axios.post(`${ApiURL}/user`, formData, {
        withCredentials: true,
      });
      setShowModal(response.data.user.name);
      setTimeout(() => {
        dispatch(createUser(response.data));
      }, 2000);
    } catch (error) {
      console.log(error)
      setErrorAuth('Ya existe una cuenta con esa dirección de e-mail');
    }
  };

  const handleChange = (event, value) => {
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameFormat = /^[a-zA-Z]{1,15}$/;
    const passwordFormat = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/;
    setErrors((prev) => ({ ...prev, [event]: false }));
    let errorString;
    if (event === 'name') errorString = 'un nombre';
    if (event === 'lastName') errorString = 'un apellido';
    if (event === 'email') errorString = 'un correo electrónico';
    if (event === 'password') errorString = 'una contraseña';
    if (event === 'confirmPassword') errorString = 'nuevamente la contraseña';

    if (!value) {
      setErrors((prev) => ({ ...prev, [event]: `Ingresa ${errorString}` }));
    } else {
      if (event === 'name' || event === 'lastName') {
        if (!value.match(nameFormat)) {
          setErrors((prev) => ({
            ...prev,
            [event]: `Ingresa ${errorString} válido`,
          }));
        }
      }
      if (event === 'email') {
        if (!value.match(emailFormat)) {
          setErrors((prev) => ({
            ...prev,
            [event]: `Ingresa ${errorString} válido`,
          }));
        }
      }
      if (event === 'password') {
        if (!value.match(passwordFormat)) {
          setErrors((prev) => ({
            ...prev,
            [event]: 'Debe tener al entre 6 y 10 caracteres; y al menos un número, una minúscula y una mayúscula. Puede contener símbolos.',
          }));
        }
      }

      if (event === 'confirmPassword') {
        if (formData.password !== value) {
          setErrors((prev) => ({
            ...prev,
            [event]: 'Las contraseñas no coinciden',
          }));
        }
      }
    }
    setFormData((prev) => ({ ...prev, [event]: value }));
  };

  return (
    <div>
      <CreateAccountView
        setShowModal={setShowModal}
        handleSubmit={handleSubmit(onSubmit)}
        errors={errors}
        errorAuth={errorAuth}
        handleChange={handleChange}
      />
    </div>
  );
};
