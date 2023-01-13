const express = require("express");

const app = express();
app.use(express.json());

app.get("/", () => {
  console.log("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running http://localhost:3000.com 🚀 ");
});
