import dotenv from "dotenv"

dotenv.config({
  path : "./.env"

});


let userName = process.env.Name

console.log(userName);



console.log("Backend Project set");

