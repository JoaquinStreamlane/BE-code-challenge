import express from "express";
import { getReport } from "./reports.controller.js";

const app = express();
const port = 8080;

app.get("/", (_, res) => res.send("Welcome"));

app.get("/report", async (req, res) => {
  const sorting = req.query.sortBy;
  const report = await getReport(sorting);
  res.send(report);
});

app.listen(port, () => {
  console.log(`Sandbox listening  http://localhost:${port}`);
});
