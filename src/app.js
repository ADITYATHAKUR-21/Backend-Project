import express from 'express';
import cors from 'cors';
import healthCheackRouter from "./routes/healthCheack.route.js"


const app = express();

// Basic configrations
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(express.static("public"));


//  cors comfigrations
app.use(cors({
  origin: process.env.CROS_ORIGIN?.split(",") || "http://localhost:5173",
  credentials: true,
  methods: ("GET", "POST", "PUT", "PATCH", "OPTIONS", "DELETE"),
  allowedHeaders: ("Content_Type", "Authorization")
}))

app.use("/api/v1/healthCheack", healthCheackRouter )



app.get('/', (req, res) => {
  res.send('Hello Basecampy')
})


export default app;
