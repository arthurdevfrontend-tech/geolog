import express from "express";
import cors from "cors";
import geoip from "geoip-lite";

const app = express();
app.use(cors());

// Root endpoint
app.get("/", (req, res) => {
  res.json({ message: "GeoIP API online" });
});

// Endpoint: /geo
// Returns city, region (state) and country based on visitor IP
app.get("/geo", (req, res) => {
  // Get real IP (supports proxies)
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress;

  const geo = geoip.lookup(ip);

  if (!geo) {
    return res.json({
      ip,
      city: null,
      state: null,
      country: null,
      error: "Não foi possível localizar a região.",
    });
  }

  res.json({
    ip,
    city: geo.city || null,
    state: geo.region || null,
    country: geo.country || null,
  });
});

// Custom endpoint: /geo/:ip
app.get("/geo/:ip", (req, res) => {
  const { ip } = req.params;
  const geo = geoip.lookup(ip);

  if (!geo) {
    return res.json({
      ip,
      city: null,
      state: null,
      country: null,
      error: "IP inválido ou não encontrado",
    });
  }

  res.json({
    ip,
    city: geo.city || null,
    state: geo.region || null,
    country: geo.country || null,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`GeoIP API rodando em http://localhost:${PORT}`)
);
