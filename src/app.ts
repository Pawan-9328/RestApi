import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";




const app = express();


app.get('/', (req, res, next)=>{

    //create an error 
//const error = createHttpError(400,"Something went wrong" );

//  throw error;
   
    res.json({message: "Welcome to elib apis"});
});

//..Global Error handler used here 
// pass only ref can't need call because is middlwares 
app.use(globalErrorHandler);


export default app;