
export const port:number = Number (process.env.PORT) || 7000 ;
export const portMsg = `Connected at http://localhost:${port}`

//MONGODB
const DB_USER = process.env.USER;
const DB_PASS = process.env.PASSWORD;
export const mongoDB:string = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.xq19opq.mongodb.net/`

