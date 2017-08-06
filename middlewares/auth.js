var twitter = require("node-twitter-api");

 tw = new twitter({
 	consumerKey: 'HbnieopyPeDPXbw1pOSnuEWkN',
	consumerSecret: 'WilWvdBqpYZNzHVGK7nTByDyPzL2D3gzQU6KXAbuJk3chppFkH',
	callback: 'http://127.0.0.1:3000/api/access-token'
});


module.exports ={
	authenticate:()=>{
		return new Promise((reply, reject)=>{
			tw.getRequestToken((error,token,secret)=>{
				if(error) return reject({details: error});
				return reply(secret);
			});
		});	
	},

	access: (request_secret)=>{
		const requestToken = req.query.oauth_token,
      	verifier = req.query.oauth_verifier;
      	tw.getAccesToken(requestToken, request_secret,verifier, (error, accessToken, accessSecret)=>{
      		if(error) return reject({details: "something went wrong"})
      		tw.verifyCredentials(accessToken, accessSecret, (error, user)=>{
      			if(error) return reject({details: "ups, thats not what i expect"});
      		    return reply(user);
      		});
      	});
	}
}