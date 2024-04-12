import { config } from "../config/config";
import express, {NextFunction, Request, Response } from "express";
import  { HttpError } from "http-errors";


// Global error handler - 
// use - register the middleware 
// npm i http-errors -create an errors  in proper formet 
const globalErrorHandler = (
   err:HttpError, 
   req:Request, 
   res:Response,
   next: NextFunction 
   
   ) => {

   const statusCode = err.statusCode || 500;
    
   return res.status(statusCode).json({
       message: err.message,
       // all details information of err inside this
       // send only development not in production  
       errorStack: config.env === "development" ? err.stack 
       : '',



   });
};

export default globalErrorHandler;