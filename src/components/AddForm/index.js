import { useState } from 'react'

import './styles.css'

import inputData from '../../input.json'

export default function AddForm(props) {
  const { data, handlePushInData } = props

  const [isOpenForm, setIsOpenForm] = useState(false)

  // Текстовые поля
  const [inputId, setInputId]                 = useState({ value: '', isSuccess: null })
  const [inputFirstName, setInputFirstName]   = useState({ value: '', isSuccess: null })
  const [inputLastName, setInputLastName]     = useState({ value: '', isSuccess: null })
  const [inputEmail, setInputEmail]           = useState({ value: '', isSuccess: null })
  const [inputPhone, setInputPhone]           = useState({ value: '', isSuccess: null })

  function changeInput(field, event) {
    const inputValue = event.target.value
    let regexp = null

    switch (field) {
      case 'id':
        regexp = /^\d+$/
        testingField(regexp, inputValue, setInputId)
        break;

      case 'firstName':
        regexp = /^[A-Za-z]+$/
        testingField(regexp, inputValue, setInputFirstName)
        break;

      case 'lastName':
        regexp = /^[A-Za-z]+$/
        testingField(regexp, inputValue, setInputLastName)
        break;

      case 'email':
        regexp = /^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
        testingField(regexp, inputValue, setInputEmail)
        break;

      case 'phone':
        regexp = /^\((\d{3})\)(\d{3})[-](\d{4})$/
        testingField(regexp, inputValue, setInputPhone)
        break;

      default:
        break;
    }
  }

  function testingField(regexp, inputValue, setter) {
    const matches = inputValue.match(regexp)

    if (matches !== null) {
      setter({ value: inputValue, isSuccess: true })
    }
    else {
      if (inputValue === '')
        setter({ value: inputValue, isSuccess: null })
      else
        setter({ value: inputValue, isSuccess: false })
    }
  }

  function getStateInput(title) {
    if (title === 'id') return inputId
    else if (title === 'firstName') return inputFirstName
    else if (title === 'lastName') return inputLastName
    else if (title === 'email') return inputEmail
    else if (title === 'phone') return inputPhone
  }

  function clickButtonOpen() {
    if (isOpenForm) {                                     // Если форма уже открыта (кнопка нажата не первый раз)

      // Добавление
      if (inputId.isSuccess && inputFirstName.isSuccess && inputLastName.isSuccess && inputEmail.isSuccess && inputPhone.isSuccess) {
        let elem = {
          id: Number.parseInt(inputId.value),
          firstName: inputFirstName.value,
          lastName: inputLastName.value,
          email: inputEmail.value,
          phone: inputPhone.value,
          address: {
            city: "some city",
            state: "some state",
            streetAddress: "some streetAddress",
            zip: "some zip"
          },
          description: "some description"
        }

        handlePushInData(data.concat(elem))

        // Обнуление
        setInputId({ value: '', isSuccess: null })
        setInputFirstName({ value: '', isSuccess: null })
        setInputLastName({ value: '', isSuccess: null })
        setInputEmail({ value: '', isSuccess: null })
        setInputPhone({ value: '', isSuccess: null })
        setIsOpenForm(false)
      }
      else {
        // Выделить пустые поля
        !inputId.isSuccess && setInputId({ ...inputId , isSuccess: false })
        !inputFirstName.isSuccess && setInputFirstName({ ...inputFirstName, isSuccess: false })
        !inputLastName.isSuccess && setInputLastName({ ...inputLastName, isSuccess: false })
        !inputEmail.isSuccess && setInputEmail({ ...inputEmail, isSuccess: false })
        !inputPhone.isSuccess && setInputPhone({ ...inputPhone, isSuccess: false })
      }


    }
    else {                                                // Если кнопка нажата первый раз
      setIsOpenForm(true)
    }
  }


  return (
    <div className="formAdd">
      { isOpenForm &&
        <div>
        {
          inputData.addInputs.map((input, index) => (
            <label key={ input.title + index }>{ `${ input.title }: ` }
              <input
                type={ input.type }
                name={ input.title }
                value={ getStateInput(input.title).value }
                onChange={ changeInput.bind(null, input.title) }
                className={
                  getStateInput(input.title).isSuccess === null ?
                    ""
                  :
                    getStateInput(input.title).isSuccess ? "success" : "fail"
                }
              />
            </label>
          ))
        }
        </div>
      }
      <button onClick={ clickButtonOpen }>Добавить</button>
      {isOpenForm &&
          <button onClick={ () => { setIsOpenForm(false) } }>Закрыть</button>
      }
    </div>
  )
}
