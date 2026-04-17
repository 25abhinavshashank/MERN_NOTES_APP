import { useState } from "react";
import { addNote } from "./api";

export default function AddNoteCard() {
    const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit=async(e)=>{
    e.preventDefault();
 const data={title:title,description:description}
    addNote(data)
  .then(()=>{
    alert("Note Added")
    setDescription("")
    setTitle("")
  })
    
  

  }



  return (
        <div className="flex items-center justify-center">
    <div className="h-[350px] w-[350px] border border-amber-400 rounded-3xl flex justify-center items-center">
      
      <form className="flex flex-col gap-4 w-[300px]">

        <div >
          <span className="block mb-2 mt-2">TITLE:</span>
          <input 
            type="text" 
             value={title}
            placeholder="Enter title"
            onChange={(e)=>{setTitle(e.target.value)}}
            className="w-full p-2 border rounded-3xl"
          />
        </div>

        <div className="">
          <span className="block mb-2">Description:</span>
          <textarea 
            type="text" 
             value={description}
            placeholder="Enter description"
            onChange={(e)=>{setDescription(e.target.value)}}
            className="w-full h-[150px] px-2.5 py-2 border rounded-3xl resize-none overflow-y-scroll  no-scrollbar"
          />
        </div>
         <button onClick={handleSubmit}className="bg-amber-600 text-xl p-1 border border-amber-400 rounded-3xl align-middle mb-2">Add Note</button>
      </form>

    </div>
    </div>
  )
}