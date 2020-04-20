import React, { useState, useEffect } from 'react'

export default function CategSelector({ categNames: _categNames, onChange, className, id }) {

  const [categ, setCateg] = useState();
  const [categNames, setCategNames] = useState();

  useEffect(() => {
    if (_categNames) setCategNames(_categNames);
  }, [_categNames])

  const handleChange = (event) => {
    setCateg(event.target.value);
    onChange(event.target.value);
  };

  return (
    <select id={id} name="estado" value={categ} onChange={handleChange} className={className}>
      <option value="">--</option>
      {categNames && categNames.map((name) => {
        return (
          <option value={name}>{name}</option>
        )
      })
      }
    </select>
  )
}