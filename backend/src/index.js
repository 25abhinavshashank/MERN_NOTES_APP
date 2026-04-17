require('dotenv').config();

const express=require('express')
const mongoose=require('mongoose')
const app=express();
const appRouter=require("../src/routes/notesRoutes");
const cors=require('cors')

app.use(cors())
app.use(express.json());
app.use("/notes",appRouter);




const dns=require('dns');
dns.setServers(["8.8.8.8","0.0.0.0"])


const initialise_connection=async()=>{
      try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Db connected");

        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log("App listening at port no :" + PORT);
        });

    } catch (err) {
        console.log("DB connection error", err);
    }
}
initialise_connection();