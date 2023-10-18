import { useState, useEffect } from 'react'
import { Button } from '../Button';

import './styles.css'

export function SearchForm({ handleChangeValue }) {
  const [valueInput, setValueInput] = useState('')

  const inputOnChange = (event) => {
    setValueInput(event.target.value)
  }

  useEffect(() => {
    handleChangeValue(valueInput)
  }, [valueInput])

  return (
    <div className="SearchForm pure-form">
      <input type="text" value={ valueInput } onChange={ inputOnChange } />
      <Button onClick={ handleChangeValue.bind(null, valueInput) }>Найти</Button>
    </div>
  )
}
