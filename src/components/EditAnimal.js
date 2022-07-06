import React, { useState } from 'react'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase-config'

export default function EditAnimal( {name, category, editDesc, finishEdit } ) {

    // Allow the user to edit 2 fields for each task:
    const [title, setTitle] = useState(editTitle)
    const [description, setDescription] = useState(editDesc)


  const handleUpdate = async (e) => {
    // will not reload the page - keep the changes
    e.preventDefault()
    // doc() - will return a specific document by: database, collection, id
    const taskDocRef = doc(db, 'Animal', id);
    // we wrap the update with try&catch - it doesn't have to work!
    try{
      await updateDoc(taskDocRef, {
        title: title, 
        description: description
      });
      finishEdit();
    }
    catch(e){alert(e)}
  }

  return (
    <div style={{ backgroundColor:'lightgray', padding: 10, marginTop: 5 }}>
        <form onSubmit={handleUpdate}>

            <label>Edit title</label>
            <input type='text' onChange={(e)=>setTitle(e.target.value)} value={title} 
            className='form-control'/>

            <label>Edit description</label>
            <textarea onChange={(e)=>setDescription(e.target.value)} value={description} 
            className='form-control'></textarea>
            
            <br/>

            <button type='submit' className='btn btn-primary'>Save changes</button>

        </form>
    </div>
  )