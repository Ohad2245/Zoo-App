import React, { useState } from 'react'
import EditAnimal from './EditAnimal';

export default function Animal({ id, title, description, completed }) {

  const [edit, setEdit] = useState(false);

  return (
    <div className='alert'>
        <h3>{title}</h3>
        <p>{description}</p>

        <button className='btn btn-primary' onClick={()=>setEdit(true)}>Edit</button>

        {edit && (
          <EditAnimal
          id={id}
          editTitle={title}
          editDesc={description}
          finishEdit={()=>setEdit(false)}
          />
        )}

    </div>
  )
}