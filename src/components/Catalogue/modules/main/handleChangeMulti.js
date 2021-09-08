export const handleChangeMultiples = (options, setOptions, event) => {
  let newArray = [...options[event.target.name], event.target.id]
  setOptions(prev => ({ ...prev, [event.target.name]: newArray }))
  if (options[event.target.name].includes(event.target.id)) {
    newArray = newArray.filter(subCat => subCat !== event.target.id)
  }
}
