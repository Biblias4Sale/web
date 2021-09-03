export const Validations = (values) => {
  const errors = {}
  if (!values.name) { errors.name = 'Name is requiered / El nombre es requerido' } else if (values.name.length < 5 || values.name.length > 50) {
    errors.name = 'Name should be between 5 and 30 characters of extension / El nombre debe contener entre 5 y 30 caracteres'
  }
  //     if (!values.description)
  //       errors.description = `Description is requiered / La descripcion es requerida`;
  //     else if (values.description.length < 10 || values.description.length > 50) {
  //       errors.name = `values's description should be between 10 and 50 characters of extension / La descripcion debe contener entre 5 y 30 caracteres`;
  //     }
  //     if (!values.dishes)
  //       errors.dishes = `values's type of dish is requiered / Se requiere un tipo de plato`;
  //     else if (values.dishes.length < 4) {
  //       errors.dishes = `values's type of dish should be at least 5 characters of extension / El tipo de plato de la receta debe ser de al menos 4 caracteres`;
  //     }
  //     if (!values.score)
  //       errors.score = `values's score is requiered / Se requiere una puntuacion de la receta`;
  //     else if (values.score < 1 || values.score > 100) {
  //       errors.score = `values's score should be between 1 and 99 / La puntuacion de la receta debe ser entre 1 y 99 puntos`;
  //     }
  //     if (!values.healthy)
  //       errors.healthy = `values's healthy is requiered / Se requiere un puntaje de que tan saludable es la receta`;
  //     else if (values.healthy < 1 || values.healthy > 100) {
  //       errors.healthy = `values's healthy should be between 1 and 99 / La puntuacion saludable debe ser entre 1 y 99 puntos`;
  //     }
  //     if (!values.steps)
  //       errors.steps = `values's instructions is requiered / Se requiere las instrucciones de la receta`;
  //     else if (values.steps.length < 50) {
  //       errors.steps = `values's  should be between at least 50 characters of extension / Las instrucciones deben contener al menos 50 caracteres`;
  //     }
  //     if (!values.image) {
  //       errors.image = `values's image is requiered / Se requiere una imagen de la receta`;
  //     }
  //     // if (values.diets.length === 0) {
  //     //   errors.diets = `values's diets is requiered / Se requiere el/los tipos de dieta/s en la/s que esta incluida la receta`;
  //     // }
  return errors
}

// // validationSchema={Yup.object({
// //   firstName: Yup.string()
// //     .max(15, 'Must be 15 characters or less')
// //     .required('Required'),
// //   lastName: Yup.string()
// //     .max(20, 'Must be 20 characters or less')
// //     .required('Required'),
// //   email: Yup.string()
// //     .email('Invalid email address')
// //     .required('Required'),
// //   acceptedTerms: Yup.boolean()
// //     .required('Required')
// //     .oneOf([true], 'You must accept the terms and conditions.'),
// //   jobType: Yup.string()
// //     .oneOf(
// //       ['designer', 'development', 'product', 'other'],
// //       'Invalid Job Type'
// //     )
// //     .required('Required'),
// // })}
