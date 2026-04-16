import React from 'react'
import NoteCard from '../components/NoteCard'

function Home() {
  return (
    <div className="min-h-screen mx-auto py-5 flex flex-wrap gap-6 justify-baseline">

      <NoteCard 
        title="Gym"
        description="Leg day workout"
      />

     

    </div>
  )
}

export default Home