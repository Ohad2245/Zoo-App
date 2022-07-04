import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore'
// import { db } from '../firebase-config';
import {db} from '../firebase-config';
import Animal from '../Animal';

export default function AnimalDetails() {

//Array to store all the animals from db:
const [animals, setAnimal] = useState([]);

useEffect(()=>{

    const getAnimal = async(db) =>{
        const AnimalCol = collection(db,'Animals');

        const animalsSnapshot = await getDocs(AnimalCol);

        const animalList = await animalsSnapshot.docs.map( doc => ({
            id: doc.id,
            data: doc.data()
        }))
        setAnimal(animalList);
    }
    getAnimal(db);

    console.log(animals);
},[animals])
  return (
    <div className="container">
        <h2>Animal Manager</h2>
        {animals.length > 0 && animals.map(animal =>{
            <div key={animal.category}>
                <Animal 
                name={animal.data.name}

                />

            </div>
        })}
    </div>
  )
}

