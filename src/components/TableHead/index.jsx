import config from '../../config.json'

import './styles.css'

export function TableHead(props) {
  const { nameColSort, modeSort, handleClickSort } = props

  return (
    <thead>
      <tr>
        { config.tableFields.map((title) => (
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
