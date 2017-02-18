var Profile = require("./profile.js");
var renderer = require('./renderer.js');

var headerType = 'Content-Type';
var headerValue = 'text/html';

function home(request,response){
	//if url == "/" && GET
	if(request.url === '/'){
	 	response.statusCode = 200;
  		response.setHeader(headerType,headerValue);
  		renderer.view("header",{},response);
  		renderer.view("search",{},response);
  		renderer.view("footer",{},response);
  		response.end();
  	}

	
	}

function user(request,response){
	var username = request.url.replace("/","");
	if(username.length > 0){
		response.statusCode = 200;
  		response.setHeader(headerType,headerValue);
		renderer.view("header",{},response);
  	
		//get json from Treehouse
		var studentProfile = new Profile(username);
				//show profile
			studentProfile.on("end",function(profileJSON){

				//store the values which we need
				var values = {
					avatarURL: profileJSON.gravatar_url,
					badges: profileJSON.profile_name.length,
					username:profileJSON.profile_name,
					javaScriptPoints: profileJSON.points.JavaScript
				}

				renderer.view("profile",values,response);
  				renderer.view("footer",{},response);
  				response.end();  		

			});
			
			//on "error"
			studentProfile.on("error", function(error){
				renderer.view("error",{errorMessage: error.message},response);
				renderer.view("search",{},response);
				renderer.view("footer",{},response);
				response.end();
			});
		
		}
	}


module.exports.home = home;
module.exports.user = user;