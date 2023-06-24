import express from "express";
import { CONFIG } from "./config/environment";
import { Req } from "./types/request";
var cors = require("cors");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./router/eventScheduler.routes");
const app = express();


app.use((req: Req, res: express.Response, next: express.NextFunction) => {
  res.header(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      " Content-Type, Accept," + " Authorization,"
      );
      res.header("Access-Control-Allow-origin", req.headers.origin);
      next();
    });
    app.use(cors());
    
   // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
    const port = process.env.PORT || 3300;

    app.use(userRoutes);
  
    
    app.use(bodyParser.urlencoded({ extended: false }));

    mongoose.connect(CONFIG.DB_CONNECTION_STRING!)
      
    app.listen(port, () => {
      console.log(`The application is listening on port ${port}!`);
    });
    
    
    