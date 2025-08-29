import dotenv from "dotenv"
import express from "express";

dotenv.config({
  path : "./.env"

});

const app = express()
const port = process.env.PORT || 3000;4500

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Adi', (req, res) => {
  res.send("Aditya is best coder")

})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

