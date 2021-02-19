import { useState, useEffect } from 'react'
import axios from 'axios'

import Loader from '../Loader'
import Table from '../Table'

export default function SectionData(props) {
  const { linkData } = props

  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(linkData)
      .then((res) => {
        setData(res.data)
      })
  }, [linkData])

  return (
    <>
      {
        !data.length ?
          <Loader />
        :
          <Table data={ data } />
      }
    </>
  )
}
