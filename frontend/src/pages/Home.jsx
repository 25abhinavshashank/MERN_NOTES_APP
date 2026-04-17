import React, { useEffect, useState } from 'react'
import NoteCard from '../components/NoteCard'
import { getNotes } from '../components/api';

function Home() {
  const [notes,setNotes]=useState([]);

  useEffect(()=>{
        getNotes()
         .then(data=>{ 
          setNotes(data)});
  },[])
  return (
    <div className="min-h-screen mx-auto py-5 flex flex-wrap gap-4 content-start">

     {notes.map((note)=>{
      return <NoteCard key={note._id} id={note._id} title={note.title} description={note.description}></NoteCard>
     })}

     

    </div>
  )
}

export default Home