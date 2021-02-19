import './styles.css'

export default function SelectedStr(props) {
  const { dataStr } = props

  function getSelectBlock() {
    let result = null

    if (dataStr !== null) {
      const str = JSON.parse(dataStr)

      result = (
        <div className="selectBlock">
          <div>Выбран пользователь: <b>{ str.firstName } { str.lastName }</b></div>
          <div>Описание: <textarea disabled rows="5" cols="90" value={ str.description }></textarea></div>
          <div>Адрес проживания: <b>{ str.address.streetAddress }</b></div>
          <div>Город: <b>{ str.address.city }</b></div>
          <div>Провинция: <b>{ str.address.state }</b></div>
          <div>Индекс: <b>{ str.address.zip }</b></div>
        </div>
      )
    }

    return result
  }


  return getSelectBlock()
}
