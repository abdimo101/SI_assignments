import express from "express";

const app = express();

app.get("/csv", async (req, res) => {
    const response = await fetch("http://127.0.0.1:5000/csv");
    const result = await response.json()
    res.send({ result });
});

app.get("/json", async (req, res) => {
    const response = await fetch("http://127.0.0.1:5000/json");
    const result = await response.json()
    res.send({ result });
});

app.get("/yml", async (req, res) => {
    const response = await fetch("http://127.0.0.1:5000/yml");
    const result = await response.json()
    res.send({ result });
});

app.get("/xml", async (req, res) => {
    const response = await fetch("http://127.0.0.1:5000/xml");
    const result = await response.json()
    res.send({ result });
});

app.get("/txt", async (req, res) => {
    const response = await fetch("http://127.0.0.1:5000/txt");
    const result = await response.json()
    res.send({ result });
});


const PORT = 8080;
app.listen(8080, () => console.log("Server is running on port", PORT));

