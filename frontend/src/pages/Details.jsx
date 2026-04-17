import React, { useEffect, useState } from 'react'
import DetailsCard from '../components/DetailsCard'
import { useParams } from 'react-router-dom'
import { getNoteById } from '../components/api';

function Details() {
  const {id}=useParams();
  const [note,setNote]=useState(null);
  
  useEffect(()=>{
   getNoteById(id)
    .then(data=>{
       console.log(data)
      setNote(data);
    })
  },[id])
if (!note) return <div className='flex max-w-full justify-center  items-center'> <p >Loading...</p></div>
  return (
    <>
    <div><DetailsCard id={id} title={note.title} description={note.description} ></DetailsCard></div>
    </>

  )
}

export default Details