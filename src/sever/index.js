const express = require("express");
const morgan = require("morgan");

const dbConnect = require("./middleware/mongoConnect");
const userRouter = require("./routers/userRouter");
const mailRouter = require("./routers/mailRouter");

const app = express();


app.use(express.json());
app.use("", userRouter);
app.use("", mailRouter);
app.use(morgan('tiny'));

app.get("/health", (req, res) => {
    res.json({
        status: true,
        msg: "Server Alive"
    });
})

dbConnect();

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}...`);
})

