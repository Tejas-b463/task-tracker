import express from "express";
import authRoutes from "./routes/auth.route.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import countryRoutes from "./routes/countryRoutes.js"

import { connectDB } from "./lib/db.js"

dotenv.config()
const app = express();

const PORT = process.env.PORT

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://locahost:5173",
    credentials: true,
}))
app.use('/api/countries', countryRoutes);


app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    console.log('server is running on PORT:' + PORT);
    connectDB();
});