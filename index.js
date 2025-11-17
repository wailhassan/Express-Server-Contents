import express from "express";
const app = express();
const port = 3000;

// To get response form the server
app.get("/", (req, res) => {
  res.send("Hello Wail, I'm here for you");
});

app.listen(port, () => {
  console.log(`Server Running on port ${port}.`);
});
