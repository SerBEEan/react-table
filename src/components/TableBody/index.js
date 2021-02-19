

export default function TableBody(props) {
  const { strings } = props

  return (
    <tbody>
      {strings.map((str) => (
        <tr key={ str.id + str.phone }>
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
