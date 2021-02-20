import { useState, useEffect } from 'react'
import axios from 'axios'

import Loader from '../Loader'
import Table from '../Table'
import SelectedStr from '../SelectedStr'
import SearchForm from '../SearchForm'

import inputData from '../../input.json'

import './styles.css'

export default function SectionData(props) {
  const { linkData } = props

  // Для приема данных
  const [data, setData] = useState([])                          // Массив данных

  // Для выбора строки
  const [dataStr, setDataStr] = useState(null)                  // Выбранная строка

  // Для поиска
  const [searchingValue, setSearchingValue] = useState('')      // Искомое значение (из формы поиска)

  // Для сортировки
  const [nameColSort, setNameColSort] = useState('id')
  const [modeSort, setModeSort] = useState('down')

  useEffect(() => {
    axios
      .get(linkData)
      .then((res) => res.data)
      .then((res) => {
        setData( res.sort( (a, b) => a.id-b.id ) )
      })
      .catch(errMessage => console.error(errMessage))
  }, [linkData])

  function filterData(arr) {                                    // Фильтрует
    let tmpArr = arr.filter((str) => {
      for (let i = 0; i < inputData.tableFields.length; i++) {
        let result = str[ inputData.tableFields[i] ].toString().includes(searchingValue)

        if(!result)
          continue;

        return result
      }
      return false
    })

    return tmpArr
  }

  function handleClickSort(nameCol) {
    if (nameCol === nameColSort){                                   // Если сортируется тот же столбец
      modeSort === 'up' ? setModeSort('down') : setModeSort('up')
      data.reverse()
    }
    else {                                                          // Если сортируется новый столбец
      setNameColSort(nameCol)
      setModeSort('down')
      sorting(nameCol)
    }
  }

  function sorting(col) {
    if (col === 'id') {
      data.sort((a,b) => {
        return a.id-b.id
      })
    }
    else {
      data.sort((a, b) => {
        if (a[col] > b[col]) {
          return 1;
        }
        if (a[col] < b[col]) {
          return -1;
        }
        return 0;
      })
    }
  }


  return (
    <div className="container">
      {
        !data.length ?
          <Loader />
        :
          <>
            <SearchForm handleChangeValue={ setSearchingValue } />
            <Table
              data={ filterData(data) }
              handleChooseStr={ setDataStr }
              handleClickSort={ handleClickSort }
              modeSort={ modeSort }
              nameColSort={ nameColSort }
            />
            <SelectedStr dataStr={ dataStr } />
          </>
      }
    </div>
  )
}
