const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./helpers/routes");
const cors = require("cors");
const port = Number(process.env.PORT || 3000);

app.use(cors({ origin: "*", optionSuccessStatus: 200 }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', routes);

app.listen(port, () => {
	console.log('server listening on', port);
});
