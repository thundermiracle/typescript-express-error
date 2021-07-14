import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  const body = req.body;
  throw Error("Oh! My Error!!");
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
