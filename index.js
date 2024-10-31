import express from "express";
import bodyParser from "body-parser";
import Student from './routes/Student.js';

const app = express();
const port = 8000;

// Middleware untuk parsing JSON
app.use(bodyParser.json());

// Routing untuk /Student
app.use("/Student", Student);

// Routing untuk root '/'
app.get("/", (req, res) => {
    console.log(['GET ROUTE']);
    res.send("Selamat Pagi");
});

// Jalankan server di port 8000
app.listen(port, () => console.log(`Server berjalan di port: http://localhost:${port}`));
