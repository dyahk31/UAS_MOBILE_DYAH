import express from "express";
import cors from "cors";
import CustRoute from "./routes/CustRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(CustRoute);

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

let port = process.env.PORT || 2000

app.listen(2000, () => console.log('Server up and running...'));