const express = require("express");

const app = express();
const port = process.env.PORT || 8009;

app.use(express.static("dist"));

app.listen(port, () =>
  console.log(`Storybook server listening on port ${port}!`)
);
