const notes = require("../models/notesSchema")

const getNotes=async(req,res)=>{
    const note=await notes.find().sort({"updatedAt":-1})

    res.status(200).json(note);
}

const addNote=async(req,res)=>{
    try{
let{title,description}=req.body;

    title=title.trim();
    if(!title||title.length<2){
        return res.send("Please enter the valid title");
    }

    description=description.trim();
    if(description.length==0){
        return res.send("Please enter the discription");

    }

    const note=new notes({
        title:title,
        description:description
    })
    await note.save();
    res.status(201).json({message:"Note added successfully",
        data:note
    })
    }catch(err){
  res.status(500).json({message:"Server err "+err});
    }
    

}

const deleteNote=async(req,res)=>{
    try
    {const id=req.params.id;
        const note=await notes.findByIdAndDelete(id);
    if(note)
   { 
    return res.json({message:"note deleted" })}

    return res.send("Note not found");}
    catch(err){
        res.send({message:"server err "})
    }
}

const updateNote=async(req,res)=>{
    try{const id=req.params.id;
    const note=await notes.findByIdAndUpdate(id,req.body, { new: true });
    if(note)
     return res.send(note);

    return res.send("no user exist");
}
     catch(err){
        res.send({message:"server err "})
    }
}

const getNote=async(req,res)=>{

    try{const id=req.params.id;
    const note=await notes.findById(id);
     if(note)
     return res.send(note);

    return res.send("no user exist");}
     catch(err){
        res.send({message:"server err "})
    }
}

module.exports={getNotes,addNote,deleteNote,updateNote,getNote}