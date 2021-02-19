import { useState, useEffect } from 'react'

import './styles.css'

export default function SearchForm(props) {
  const { outHandleChangeValue } = props

  const [valueInput, setValueInput] = useState('')

  function handleChange(event) {
    setValueInput(event.target.value)
  }

  useEffect(() => {
    outHandleChangeValue(valueInput)
  }, [valueInput])

  return (
    <div className="searchForm">
      <input type="text" value={ valueInput } onChange={ handleChange } />
      <button onClick={ outHandleChangeValue.bind(null, valueInput) }>Найти</button>
    </div>
  )
}
