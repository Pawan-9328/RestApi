import { config as conf} from "dotenv";

conf();

const _config = {
    port: process.env.PORT,
    databaseURL: process.env.MONGO_CONNECTION_STRING,
 
};

//port=5513 npm run dev

export const config = Object.freeze(_config);