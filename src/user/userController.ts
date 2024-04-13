import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import bcrypt, { genSalt } from "bcrypt";
import userModel from "./userModel";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";
import { User } from "./userTypes";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  //for testing
  //  console.log('reqdata' , req.body);
  //  return res.json({});

  // get the data using destructuring
  const { name, email, password } = req.body;

  // validation
  if (!name || !email || !password) {
    const error = createHttpError(400, "All fields are required");
    return next(error);
  }
  //Database call
  //email: email - key object both are some so used only email it's work fine
  try {
    const user = await userModel.findOne({ email });

    if (user) {
      const error = createHttpError(
        400,
        "User already exists with this email."
      );
      return next(error);
    }
  } catch (err) {
    return next(createHttpError(500, "Error while getting user "));
  }
  //password->hash
  //salt - random string

  const hashedPassword = await bcrypt.hash(password, 10);

  let newUser: User;
  try {
    newUser = await userModel.create({
      name,
      email,
      // always pass hashed password
      password: hashedPassword,
    });
  } catch (error) {
    return next(createHttpError(500, "Error while creating user"));
  }

  try {
    //..Token generation jwt
    //sub properties like -  is user id
    const token = sign({ sub: newUser._id }, config.jwtSecret as string, {
      expiresIn: "7d",
      algorithm: "HS256",
    });

    //response
    res.status(201).json({ accessToken: token });
  } catch (error) {
        
    return next(createHttpError(500, 'Error while singning jwt token '))


  }
};


const loginUser = async (req: Request, res: Response, next: NextFunction)=>{
   res.json({message: "OK"});


}

export { createUser, loginUser };
