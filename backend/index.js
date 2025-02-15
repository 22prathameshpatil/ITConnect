require("dotenv").config();
const port = process.env.PORT || 8000;
const express = require("express");
const app = express();
const routerLogin = require("./routes/auth-router");
const routerContact = require("./routes/contact-router");
const routerService = require("./routes/service-route");
const routerAdmin = require("./routes/admin-router");
const mongoose = require("mongoose");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const cors = require("cors");
const handleCheckAdmin = require("./middlewares/admin-middleware");

const corsOptions = {
  origin: "https://itconnect-frontend.onrender.com",
  methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false}));
app.use(express.json()); 
app.use("/api/auth", routerLogin);
app.use("/api/contact", routerContact);
app.use("/api/service", routerService);
app.use("/api/admin", routerAdmin);
app.use(errorMiddleware);


connectDb()
.then(() => {
    console.log("Connected to MongoDB Atlas successfully");
    app.listen(port, () => {
        console.log(`app listening on port ${port}`);
    })
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
  });

