import inputData from '../../input.json'

import './styles.css'

export default function TableHead() {


  return (
    <thead>
      <tr>
        { inputData.fields.standart.map((value) => (
          <th
            key={ value }
            className="sortDown"
          >
            { value }
          </th>
        )) }
      </tr>
    </thead>
  )
}
