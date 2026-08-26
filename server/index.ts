import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { createReferenceTrace, referenceStackSnapshot } from "../shared/referenceStack";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json({ limit: "16kb" }));

  /**
   * Fixture-only reference endpoints.
   *
   * These routes intentionally never accept provider credentials, free-form message
   * content, or delivery instructions. They model the same versioned response and
   * event contracts an edge API would expose once a validated implementation begins.
   */
  app.get("/api/reference/stack", (_req, res) => {
    res.setHeader("Cache-Control", "no-store");
    res.json(referenceStackSnapshot);
  });

  app.post("/api/reference/traces", (_req, res) => {
    res.setHeader("Cache-Control", "no-store");
    res.status(201).json(createReferenceTrace());
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
