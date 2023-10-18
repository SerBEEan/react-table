import { useState, Fragment } from 'react'
import classNames from 'classnames';
import { Button } from '../Button';
import inputData from '../../input.json'

import './styles.css'


export function AddForm({ data, handlePushInData }) {
  const [isOpenForm, setIsOpenForm] = useState(false)

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
    return {
      id: inputId,
      firstName: inputFirstName,
      lastName: inputLastName,
      email: inputEmail,
      phone: inputPhone,
    }[title];
  }

  const resetFields = () => {
    setInputId({ value: '', isSuccess: null })
    setInputFirstName({ value: '', isSuccess: null })
    setInputLastName({ value: '', isSuccess: null })
    setInputEmail({ value: '', isSuccess: null })
    setInputPhone({ value: '', isSuccess: null })
    setIsOpenForm(false)
  };

  const clickButtonOpen = () => {
    // Если форма уже открыта, то происходит добавление
    if (isOpenForm) {
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
        resetFields();
      } else {
        !inputId.isSuccess && setInputId(prev => ({ ...prev , isSuccess: false }))
        !inputFirstName.isSuccess && setInputFirstName(prev => ({ ...prev, isSuccess: false }))
        !inputLastName.isSuccess && setInputLastName(prev => ({ ...prev, isSuccess: false }))
        !inputEmail.isSuccess && setInputEmail(prev => ({ ...prev, isSuccess: false }))
        !inputPhone.isSuccess && setInputPhone(prev => ({ ...prev, isSuccess: false }))
      }
    } else {
      setIsOpenForm(true)
    }
  }

  const clickButtonClose = () => {
    setIsOpenForm(false)
    resetFields();
  };

  return (
    <div className="AddForm">
      { isOpenForm &&
        <form className="pure-form AddFormBody pure-g">
        {
          inputData.addInputs.map((input, index) => (
            <Fragment key={index}>
              <label className="pure-u-1-4" for={`form-${input.title}`}>
                {input.title + ': '}
              </label>
              <input
                className={classNames({
                  [getStateInput(input.title).isSuccess ? "AddFormSuccess" : "AddFormFail"]: getStateInput(input.title).isSuccess !== null},
                  'pure-u-3-4'
                )}
                id={`form-${input.title}`}
                type={ input.type === 'phone' ? 'tel' : input.type }
                name={ input.title }
                value={ getStateInput(input.title).value }
                onChange={ changeInput.bind(null, input.title) }
              />
            </Fragment>
          ))
        }
        </form>
      }
      <div className="AddFormControls">
        <Button onClick={ clickButtonOpen }>Добавить</Button>
        {isOpenForm &&
            <Button onClick={ clickButtonClose }>Закрыть</Button>
        }
      </div>
    </div>
  )
}
