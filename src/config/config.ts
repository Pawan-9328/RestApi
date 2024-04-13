import { config as conf} from "dotenv";

conf();

const _config = {
    port: process.env.PORT,
    databaseURL: process.env.MONGO_CONNECTION_STRING,
    
    //NODE_ENV for identified it's production else development 
    env: process.env.NODE_ENV,
    jwtSecret: process.env.JWT_SECRET, 
 
};

//port=5513 npm run dev

export const config = Object.freeze(_config);