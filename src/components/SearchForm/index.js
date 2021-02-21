import { useState, useEffect } from 'react'

import './styles.css'

export default function SearchForm(props) {
  const { handleChangeValue } = props

  const [valueInput, setValueInput] = useState('')

  function inputOnChange(event) {
    setValueInput(event.target.value)
  }

  useEffect(() => {
    handleChangeValue(valueInput) // eslint-disable-next-line
  }, [valueInput])

  return (
    <div className="searchForm">
      <input type="text" value={ valueInput } onChange={ inputOnChange } />
      <button onClick={ handleChangeValue.bind(null, valueInput) }>Найти</button>
    </div>
  )
}
