import { useState } from 'react'

import './App.css'

import SectionData from './components/SectionData'
import inputData from './input.json'

// TODO:
// Над таблицей присутсвует кнопка добавить, по нажатии на которую выпадает форма добавления ряда. ДЛЯ КАЖДОГО ПОЛЯ ДОБАВЬТЕ ВАЛИДАЦИЮ(id — число, firstName, lastName — буквы, email — формат email, phone — маска телефона).
// После заполнения всех инпутов активируется кнопка Добавить в таблицу которая вставляет заполненный ряд в начало таблицы

function App() {
  const [linkData, setLinkData] = useState('')

  function chooseLinkData(linkData) {
    setLinkData(linkData)
  }

  return (
    <div className="App">
      {
        !linkData ?
          <>
            <p>Выберите набор данных</p>
            <div>
              <button onClick={ chooseLinkData.bind(null, inputData.linkData.small) }>Маленький</button>
              <button onClick={ chooseLinkData.bind(null, inputData.linkData.large) }>Большой</button>
            </div>
          </>
        :
          <SectionData linkData={ linkData }/>
      }

    </div>
  );
}

export default App
