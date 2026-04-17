const BASE_URL = import.meta.env.VITE_API_URL;

export const getNotes = () => {
  return fetch(`${BASE_URL}/notes`, { cache: "no-store" }).then(res => res.json());
};

export const getNoteById = (id) => {
  return fetch(`${BASE_URL}/notes/${id}`, { cache: "no-store" }).then(res => res.json());
};

export const addNote = async (data) => {
  const res = await fetch(`${BASE_URL}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    throw new Error("Failed to add note");
  }

  return res.json();
};

export const noteDelete=async(id)=>{
   const res=await fetch(`${BASE_URL}/notes/${id}`,{
    method:"DELETE"
   })

   if(!res.ok){
    throw new Error("err in note deletion")
   }

   return res.json();
}

export const notePatch=async(id,data)=>{
 const res=await fetch(`${BASE_URL}/notes/${id}`,{
  method:"PATCH",
  headers:{
    "Content-Type": "application/json"
  }, body: JSON.stringify(data)
 })

   if (!res.ok) {
    throw new Error("Update failed");
  }

  return res.json();
}