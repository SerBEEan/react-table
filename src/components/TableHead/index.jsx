import inputData from '../../input.json'

import './styles.css'

export function TableHead(props) {
  const { nameColSort, modeSort, handleClickSort } = props

  return (
    <thead>
      <tr>
        { inputData.tableFields.map((title) => (
          <th
            key={ title }
            className={
                nameColSort === title ?
                  (modeSort === 'up' ? 'sortUp' : 'sortDown')
                : ""
            }
            onClick={ handleClickSort.bind(null, title) }
          >
            { title }
          </th>
        )) }
      </tr>
    </thead>
  )
}
