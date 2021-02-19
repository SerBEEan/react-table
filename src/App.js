import { useState } from 'react'

import './App.css'

import SectionData from './components/SectionData'
import inputData from './input.json'


function App() {
  const [linkData, setLinkData] = useState("")

  function handleChooseData(linkData) {
    setLinkData(linkData)
  }

  return (
    <div className="App">
      {
        !linkData ?
          <>
            <p>Выберите набор данных</p>
            <div>
              <button onClick={ handleChooseData.bind(null, inputData.linkData.small) }>Маленький</button>
              <button onClick={ handleChooseData.bind(null, inputData.linkData.large) }>Большой</button>
            </div>
          </>
        :
          <SectionData linkData={ linkData }/>
      }

    </div>
  );
}

export default App
