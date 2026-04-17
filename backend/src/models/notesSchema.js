const mongoose=require('mongoose');

const schema=mongoose.Schema;

const notesSchema=new schema({
    title:{
        type:String,
        required:true,
        trim:true,
        minlength:2,
      
    },
    description:{
        type:String,
        required:true
    }

},{timestamps:true})

const notes=mongoose.model("notes",notesSchema);

module.exports=notes;