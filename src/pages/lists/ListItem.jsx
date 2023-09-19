import React from 'react'

const ListItem = ({ time, setTime }) => {
  const handleChange = (e) => {
    setTime(time.id, e.target.value)
  }

  return (
    <li>
      <input value={time.t} onChange={handleChange} />
    </li>
  )
}

export default ListItem
