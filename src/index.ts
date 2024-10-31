import express from "express";

const app = express();

app.get("/status", (req, res) => {
  res.json({ status: "ready" });
});



export default app;
