import { EditContainer } from './modules/EditContainer'

export const EditAccountView = ({ register, handleSubmit, errors }) => {
  return (
    <EditContainer
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  )
}
