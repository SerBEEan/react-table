import { useState } from 'react'

import './styles.css'

export function TableBody(props) {
  const { strings, handleChooseStr } = props

  const [lastNodeStr, setLastNodeStr] = useState(null)

  const clickStr = (event) => {
    const nodeStr = event.target.parentElement

    lastNodeStr !== null && lastNodeStr.classList.remove('active')
    nodeStr.classList.add('active')
    setLastNodeStr(nodeStr)

    handleChooseStr(nodeStr.dataset.json)
    window.scrollTo(0, document.querySelector('.Container').scrollHeight)
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
