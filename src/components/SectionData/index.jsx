import { useState, useEffect } from 'react'
import axios from 'axios'

import { Loader } from '../Loader'
import { Table } from '../Table'
import { SelectedStr } from '../SelectedStr'
import { SearchForm } from '../SearchForm'
import { AddForm } from '../AddForm'

import inputData from '../../input.json'

import './styles.css'

export function SectionData({ linkData }) {
  // Для приема данных
  const [data, setData] = useState([])
  // Для выбора строки
  const [dataStr, setDataStr] = useState(null)
  // Для поиска
  const [searchingValue, setSearchingValue] = useState('')
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

  function filterData(arr) {
    let tmpArr = arr.filter((str) => {
      for (let i = 0; i < inputData.tableFields.length; i++) {
        let result = str[ inputData.tableFields[i] ].toString().toLowerCase().includes(searchingValue.toLowerCase())

        if(!result)
          continue;

        return result
      }
      return false
    })

    return tmpArr
  }

  function handlePushInData(newData) {
    setData( sorting(newData, nameColSort) )
  }

  function handleClickSort(nameCol) {
    // Если сортируется тот же столбец
    if (nameCol === nameColSort){
      modeSort === 'up' ? setModeSort('down') : setModeSort('up')
      data.reverse()
    }
    // Если сортируется новый столбец
    else {
      setNameColSort(nameCol)
      setModeSort('down')
      setData( sorting(data, nameCol) )
    }
  }

  function sorting(arr, col) {
    const tmpArr = arr

    if (col === 'id') {
      tmpArr.sort((a,b) => {
        return a.id-b.id
      })
    }
    else {
      tmpArr.sort((a, b) => {
        if (a[col] > b[col]) {
          return 1;
        }
        if (a[col] < b[col]) {
          return -1;
        }
        return 0;
      })
    }

    return tmpArr
  }


  return (
    <div className="Container">
      {
        !data.length ?
          <Loader />
        :
          <>
            <AddForm data={ data } handlePushInData={ handlePushInData } />
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
