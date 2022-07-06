import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore'
import {db} from '../firebase-config';
// import Animal from '../Animal';
import { Link } from 'react-router-dom';
import {FaFacebookF} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs';
import './Footer.css'

export default function AnimalDetails(){
  
  const [animals, setAnimals] = useState([]);
  const [category, setCategory] = useState("");

    useEffect(()=>{
      const getAnimals = async (db) =>{
        const AnimalCol = collection(db, 'Animals');
        const animalsSnapshot = await getDocs(AnimalCol);
        const animalsList = await animalsSnapshot.docs.map((doc)=>({
          id: doc.id,
          data: doc.data()
        }))
        setAnimals(animalsList)
      }
      getAnimals(db);
    },[animals]);
    return (
      <div className='container'>
      <br></br>
        <button onClick={()=>setCategory('land')} style={{color:"black"}} className='btn-info homeButton'>Ground</button>|

        <button onClick={()=>setCategory('Water')} style={{color:"black"}} className='btn-info homeButton'>Water</button>|

        <button onClick={()=>setCategory('Air')} style={{color:"black"}} className='btn-info homeButton'>Air</button>
        {/* <Link to="/EditAnimal"><button style={{color:"white", marginLeft:"200px"}} className='btn-info homeButton'>Add new animal</button></Link> */}
        <br></br>
        <h2>Animal List</h2>
        <div className='footer__socials'>
          <a href="https://www.facebook.com/profile.php?id=100000848391807" target="_blank" rel="noreferrer"><FaFacebookF/></a>
          <a href="https://github.com/Ohad2245" target="_blank" rel="noreferrer"><BsGithub/></a>
          <a href="https://www.linkedin.com/in/ohad-cohen-6b2393211/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        </div>
        
        {animals.map(animal => (
          (animal.data.category===category)&&
          <div key={animal.id} className="card mb-3" style={{maxWidth:"auto",height:"auto", margin:"auto"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={animal.data.img} className="img-fluid rounded-start" alt="..."/>
            </div>
          <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">{animal.data.name}</h1>
            <h5>Num Of Legs: {animal.data.numOfLegs}</h5>
            <h5>Category : {animal.data.category}</h5>
            <h5>Exist In Israel? {animal.data.existInIsrael} True</h5>
            <button className='btn btn-primary'>Delete</button>|
            <button className='btn btn-primary'>Edit</button>
      </div>
    </div>
  </div>
</div>
        ))}
        
      </div>
    )
  
}
