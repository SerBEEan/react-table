import inputData from '../../input.json'

import './styles.css'

export default function TableHead(props) {
  const { nameColSort, modeSort, handleOnClickSort } = props

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
            onClick={ handleOnClickSort.bind(null, title) }
          >
            { title }
          </th>
        )) }
      </tr>
    </thead>
  )
}
