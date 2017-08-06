var twitter = require("node-twitter-api");

tw = new twitter({
 	consumerKey: 'r5S0KYoWgOsiZbvZH6lw4QPYU',
	consumerSecret: 'U1mh9aIzWnauWTbeALItzhjqncpotUjNBi8FqkMIA7Byzimi9d',
	callback: 'http://127.0.0.1:3000/api/access-token'
});


module.exports ={
	authenticate:()=>{
		return new Promise((reply, reject)=>{
			tw.getRequestToken((error,token,secret)=>{
				if(error) return reject({details: error});
				process.env.SECRET_KEY = secret;
				return reply(secret);
			});
		});	
	},

	access: ()=>{
		const request_secret = process.env.SECRET_KEY;
		const request_token = req.query.oauth_token,
      	verifier = req.query.oauth_verifier;
      	tw.getAccesToken(request_token, request_secret,verifier, (error, accessToken, accessSecret)=>{
      		if(error) return reject({details: "something went wrong"})
      		tw.verifyCredentials(accessToken, accessSecret, (error, user)=>{
      			if(error) return reject({details: "ups, thats not what i expect"});
      		    return reply(user);
      		});
      	});
	}
}