var fs = require('fs');

function view(templateName, values, response){
	//Read from the template files
	var fileContents = fs.readFileSync('./views/' + templateName + '.html');
	//Insert values into the content

	//Write out contents to the response
	response.write(fileContents);

}

module.exports.view = view;