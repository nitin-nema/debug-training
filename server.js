const express = require("express");
const app = express();
app.get("/", (_, res) => res.send("Hello!"));
app.get("/health", (_, res) => res.status(200).send("OK"));
app.listen(3000, () => console.log("Server running on port 3000"));