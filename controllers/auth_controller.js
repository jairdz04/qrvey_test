const co = require("co");
const Auth = require("../middlewares/auth");

exports.getTokenRequest = (req, res)=>{
	co(function*() {
		const auth = yield Auth.authenticate();
		res.redirect("https://api.twitter.com/oauth/authenticate?oauth_token=" + auth);
	}).catch(error => {
		console.log(error);
		res.status(500).send();
	});
};

exports.accessToken = (req, res)=>{
	co(function*() {
		const access = yield Auth.authenticate();
		res.json(access);
	}).catch(error => {
		console.log(error);
		res.status(500).send();
	});
};
