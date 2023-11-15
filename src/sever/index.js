const express = require("express");
const morgan = require("morgan");
const dbConnect = require("./controllers/mongoConnect");

const userRouter = require("./routers/userRouter");

const app = express();
app.use(express.json());
app.use("", userRouter);
app.use(morgan());

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

