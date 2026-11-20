const express = require("express");
const eventRoutes = require("./routes/eventRoutes");

const app = express();
const PORT = 3000;

// Allow the API to read JSON data from requests.
app.use(express.json());

// Use event routes for all /api/events requests.
app.use("/api/events", eventRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
