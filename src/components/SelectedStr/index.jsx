import { useMemo } from 'react';

import './styles.css'

export function SelectedStr(props) {
  const { dataStr } = props

  if (dataStr === null) {
    return null;
  }

  return (
    <ParsedStr dataStr={dataStr} />
  );
}

function ParsedStr({ dataStr }) {
  const str = useMemo(() => JSON.parse(dataStr), [dataStr]);
  
  return (
    <div className="SelectBlock">
        <div>Выбран пользователь: <b>{ str.firstName } { str.lastName }</b></div>
        <div>Описание: <textarea disabled rows="5" cols="90" value={ str.description }></textarea></div>
        <div>Адрес проживания: <b>{ str.address.streetAddress }</b></div>
        <div>Город: <b>{ str.address.city }</b></div>
        <div>Провинция: <b>{ str.address.state }</b></div>
        <div>Индекс: <b>{ str.address.zip }</b></div>
      </div>
  );
}
