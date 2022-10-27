import React from 'react'
import { Form } from 'react-bootstrap'

export default function ListOfTypes({setType,currentType,allTypes}) {

  return (
    <Form.Select
    value={currentType}
    onChange={(e) => setType(e.target.value)}
  >
    {currentType === "sintipo" && (
      <option
        key="sintipo"
        value="sintipo"
      >
        Seleccione un tipo
      </option>
    )}
    {allTypes.map((item) => (
      <option
        key={item.code}
        value={item.code}
      >
  
        {item.name}
      </option>
    ))}
  </Form.Select>
  )
}
