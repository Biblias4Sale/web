import { EditContainer } from './modules/EditContainer'

export const EditAccountView = ({ register, handleSubmit, errors, onSubmit }) => {
  return (
    <EditContainer
      register={register}
      handleSubmit={handleSubmit(onSubmit)}
      errors={errors}
    />
  )
}
