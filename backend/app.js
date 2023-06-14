const express = require("express");
const app =express();
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/error");
app.use(express.json());
app.use(cookieParser());

// cac Route

const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const oder = require("./routes/oderRoute");
app.use("/api/v1",oder);
app.use("/api/v1",product);
app.use("/api/v1",user);

//Middlerware error

app.use(errorMiddleware);

module.exports = app;