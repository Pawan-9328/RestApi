import app from "./src/app";

const startServer = () =>{
     const port = process.env.PORT || 3000;


     app.listen(port, () =>{
         console.log(`Listening on port: ${port}`);
         
     });
};
//if you can't pass this then server start 3000 port automatically 

startServer();