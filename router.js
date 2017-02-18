var Profile = require("./profile.js");


function home(request,response){
	//if url == "/" && GET
	if(request.url === '/'){
	 	response.statusCode = 200;
  		response.setHeader('Content-Type', 'text/plain');
  		response.write("Header \n");
  		response.write("Search \n");
  		response.end("Footer \n");
  	}

	
	}

function user(request,response){
	var username = request.url.replace("/","");
	if(username.length > 0){
		response.statusCode = 200;
  		response.setHeader('Content-Type', 'text/plain');
  		response.write("Header \n");
  		


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

				response.write(values.username + " has " + values.badges + " badges \n");
  				response.end("Footer \n");

			});
			
			//on "error"
			studentProfile.on("error", function(error){

				response.write(username + "\n");
  				response.end("Footer \n");
			});
		
		}
	}


module.exports.home = home;
module.exports.user = user;