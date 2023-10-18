import { useState } from 'react'

import { Button } from '../Button';
import { SectionData } from '../SectionData'
import inputData from '../../input.json'

import './styles.css'

export function App() {
  const [linkData, setLinkData] = useState('')

  return (
    <div className="App">
      {
        !linkData ?
          <>
            <p>Выберите набор данных</p>
            <div className="Buttons">
              <Button onClick={ () => setLinkData(inputData.linkData.small) }>Маленький</Button>
              <Button onClick={ () => setLinkData(inputData.linkData.large) }>Большой</Button>
            </div>
          </>
        :
          <SectionData linkData={ linkData }/>
      }
    </div>
  );
}
