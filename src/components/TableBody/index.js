import { useState } from 'react'

import './styles.css'

export default function TableBody(props) {
  const { strings, handleChooseStr } = props

  const [lastNodeStr, setLastNodeStr] = useState(null)

  function clickStr(event) {
    const nodeStr = event.target.parentElement

    lastNodeStr !== null && lastNodeStr.classList.remove('active')
    nodeStr.classList.add('active')
    setLastNodeStr(nodeStr)

    handleChooseStr(nodeStr.dataset.json)
  }

  return (
    <tbody>
      {strings.map((str) => (
        <tr key={ str.id + str.phone } onClick={ clickStr } data-json={ JSON.stringify(str) }>
          <td>{ str.id }</td>
          <td>{ str.firstName }</td>
          <td>{ str.lastName }</td>
          <td>{ str.email }</td>
          <td>{ str.phone }</td>
        </tr>
      ))}
    </tbody>
  )
}
