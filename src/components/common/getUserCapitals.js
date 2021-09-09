export const GetUserCapitals = (user) => {
  const name = user.user.name
  const lastName = user.user.lastName
  const initialName = name[0].toUpperCase()
  const initialLastName = lastName[0].toUpperCase()

  return initialName.concat(initialLastName)
}
