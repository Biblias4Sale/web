import React from 'react'
import Select from 'react-select/creatable'

export const SelectOptions = () => {
  const options = [
    { value: 'Relevancia', label: 'Relevancia' },
    { value: 'Nuevos', label: 'Recien Llegados' },
    { value: 'PrecioMayor', label: 'Precio, mayor a menor' },
    { value: 'PrecioMenor', label: 'Precio, menor a mayor' },
    { value: 'Aleatorio', label: 'Aleatorio' }
  ]
  return (
    <Select options={options} />
  )
}
export default SelectOptions
