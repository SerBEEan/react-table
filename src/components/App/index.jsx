import { useState } from 'react'

import { Button } from '../Button';
import { SectionData } from '../SectionData'
import config from '../../config.json'

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
              <Button onClick={ () => setLinkData(config.linkData.small) }>Маленький</Button>
              <Button onClick={ () => setLinkData(config.linkData.large) }>Большой</Button>
            </div>
          </>
        :
          <SectionData linkData={ linkData }/>
      }
    </div>
  );
}
