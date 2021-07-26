import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from './routes/post.js';
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use('/posts', router);

app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

const password = process.env.DB_PASS
const CONNECTION_URL = "mongodb+srv://eremitik:"+password+"@cluster0.ukfu4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((err) => console.log(err.message))

mongoose.set('useFindAndModify', false);