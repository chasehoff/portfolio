const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const formSubmission = require('./routes/form');
const cors = require('cors');
const app = express();

app.use(cors());

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use("/v1/form-submission", formSubmission);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

module.exports = router;