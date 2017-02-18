var fs = require('fs');

function view(templateName, values, response){
	//Read from the template files
	fs.readFile('./views/' + templateName + '.html',function(error,fileContents){
		if(err) throw err;
		//Insert values into the content

		//Write out to the response
		response.write(fileContents);
		});

}

module.exports.view = view;