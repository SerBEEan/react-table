import { useState } from 'react'

import { TableHead } from '../TableHead'
import { TableBody } from '../TableBody'
import { TableFooter } from '../TableFooter'

export function Table(props) {
  let { data, handleChooseStr, handleClickSort, modeSort, nameColSort } = props

  // Для перехода по страницам
  const [currentPage, setCurrentPage] = useState(1)

  const currentStrings = data.slice( (currentPage-1)*50, currentPage*50 )
  const countSrings = currentStrings.length
  const countPages = Math.ceil(data.length / 50)


  return (
    <table className="pure-table pure-table-horizontal" border="1" cellPadding="15" style={{ width: '100%' }}>
      <TableHead
        nameColSort={ nameColSort }
        modeSort={ modeSort }
        handleClickSort={ handleClickSort }
      />
      <TableBody strings={ currentStrings } handleChooseStr={ handleChooseStr } />
      <TableFooter
        countSrings={ countSrings }
        currentPage={ currentPage }
        countPages={ countPages }
        handleChangeCurrPage={ setCurrentPage }
      />
    </table>
  )
}
