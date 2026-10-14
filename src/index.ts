import { httpServerHandler } from "cloudflare:node";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello Express on Cloudflare Workers!"
  });
});

app.get("/api/status", (req, res) => {
  res.json({
    status: "ok",
    subject: "PaaS",
    week: 5,
    platform: "Cloudflare Workers"
  });
});

app.get("/api/info", (req, res) => {
  res.json({
    framework: "Express",
    runtime: "Cloudflare Workers",
    course: "Platform as a Service"
  });
});

app.get("/api/log-test", (req, res) => {
  console.log("Log test berhasil dijalankan!");

  res.json({
    message: "Log berhasil dikirim ke Cloudflare Workers"
  });
});

app.get("/api/time", (req, res) => {
  res.json({
    success: true,
    timestamp: new Date().toISOString(),
    timezone: "UTC",
  });
});

app.listen(3000);

export default httpServerHandler({ port: 3000 });