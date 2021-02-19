import { useState } from 'react'

import TableHead from '../TableHead'
import TableBody from '../TableBody'
import TableFooter from '../TableFooter'

import './styles.css'

export default function Table(props) {
  const { data } = props
  const [currentPage, setCurrentPage] = useState(1)

  const currentStrings = data.slice( (currentPage-1)*50, currentPage*50 )
  const countSrings = currentStrings.length
  const countPages = Math.ceil(data.length / 50)


  console.log(data);
  console.log(data.length);


  return (
    <table border="1" cellPadding="15">
      <TableHead />
      <TableBody strings={ currentStrings } />
      <TableFooter
        countSrings={ countSrings }
        currentPage={ currentPage }
        countPages={ countPages }
        handleOnChangeCurrPage={ setCurrentPage }
      />
    </table>
  )
}
