import React from 'react'
import Select from 'react-select/creatable'

export const SelectOptions = ({ options, setOptions }) => {
  const selections = [
    { value: 'Relevancia', label: 'Relevancia' },
    { value: 'Nuevos', label: 'Recien Llegados' },
    { value: 'priceDesc', label: 'Precio, mayor a menor' },
    { value: 'priceAsc', label: 'Precio, menor a mayor' },
    { value: 'Aleatorio', label: 'Aleatorio' }
  ]
  return (
    <div className='mb-4'>
      <Select options={selections} onChange={(event) => setOptions((prev) => ({ ...prev, orderBy: event.value }))} />
    </div>
  )
}
export default SelectOptions
