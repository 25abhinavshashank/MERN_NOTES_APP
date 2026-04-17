import React, { useState } from 'react'
import { noteDelete, notePatch } from './api';
import { useNavigate } from 'react-router-dom';

export default function DetailsCard({ id,title, description }) {
const navigate=useNavigate();
  const [edit, setEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newDesc, setNewDesc] = useState(description);
  
  const handleSave=async()=>{
    const data={title:newTitle,description:newDesc};
    setEdit(false);
    notePatch(id,data)
    .then(()=>{
          alert ("Note edited")
          navigate("/",{replace:true});
    }) 

  }
  const handleDelete=async ()=>{
     noteDelete(id)
    .then(()=>

     {setNewDesc("")
      setNewTitle("") 
      alert("Note deleted")
     
     navigate("/", { replace: true });
    }
    )
  }

  return (
    <div className="flex items-center justify-center">
      
      <div className="h-[350px] w-[350px] border border-amber-400 rounded-3xl flex justify-center items-center">
        
        <div className="flex flex-col gap-4 w-[300px]">

          {/* Title */}
          <div>
            <span className="block mb-2 mt-2">TITLE:</span>

            {edit ? (
              <input
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full p-2 border rounded-3xl"
              />
            ) : (
              <p className="p-2 border rounded-3xl">
                {newTitle}
              </p>
            )}

          </div>

          {/* Description */}
          <div>
            <span className="block mb-2">Description:</span>

            {edit ? (
              <textarea
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)}
                className="w-full h-[150px] px-2.5 py-2 border rounded-3xl resize-none overflow-y-scroll no-scrollbar"
              />
            ) : (
              <div className="h-[150px] px-2.5 py-2 border rounded-3xl overflow-hidden break-words">
                {newDesc}
              </div>
            )}

          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-0">

            {edit ? (
              <button
                onClick={handleSave}
                className="bg-green-500 text-xl p-2 text-xl border border-green-400 rounded-2xl mb-2"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setEdit(true)}
                className="bg-blue-500 text-xl p-2 border border-blue-400 rounded-3xl mb-2"
              >
                Edit
              </button>
            )}

            <button onClick={handleDelete}
              className="bg-red-500 text-xl p-2 border border-red-400 rounded-3xl mb-2 "
            >
              Delete
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}