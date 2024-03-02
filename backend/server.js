const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes")
const { notFound, errorHandler} = require("./middleware/errorMiddleware")
const chatRoutes = require("./routes/chatRoutes")

const app = express();

dotenv.config();
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running Successfully")
});

app.use('/api/user', userRoutes)
app.use('/api/chat', chatRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
