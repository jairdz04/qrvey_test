const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const expressValidation = require("express-validation");
const routes = require("./helpers/routes");
const cors = require("cors");
const port = Number(process.env.PORT || 3000);

app.use(cors({ origin: "*", optionSuccessStatus: 200 }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((err, req, res, next) => {
  if (err instanceof expressValidation.ValidationError) {
    res.status(err.status).json(err);
  } else {
    res.status(500).json({ status: err.status, message: err.message });
  }
});

app.use('/api', routes);

app.listen(port, () => {
	console.log('server listening on', port);
});

module.exports = app;