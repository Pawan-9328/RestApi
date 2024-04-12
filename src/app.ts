import express  from "express";


const app = express();


app.get('/', (req, res, next)=>{
    res.json({message: "Welcome to elib apis"});
});

// Global error handler - 
// use - register the middleware  
app.use()

export default app;