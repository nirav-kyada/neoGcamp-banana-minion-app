var btntranslate = document.querySelector('#btn-translate');
var txtinput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#txt-output');
// console.log(txtinput);
var serverURL2 = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json';
// var serverURL1 = 'https://api.funtranslations.com/translate/minion.json';
var serverURL1 = 'https://minionsapi.nirav1.repl.co/translate/minion.json'; // unlimited api translation \
//ref. - https://dev.to/rakesh/how-did-i-remove-the-rate-limit-from-my-minion-translator-and-how-you-can-do-it-too-a-neogcamp-story-2kgp

function geneateURL(text) {
	return serverURL1 + '?text=' + text;
}

function errorhandler() {
	console.log('serverside error please wait for some time', error);
	alert('server is having some issue please wait.');
}

function clickhandler() {
	var userInput = txtinput.value;

	//calls server - processing
	fetch(geneateURL(userInput))
		.then((Response) => Response.json())
		//.then((json) => console.log(json.contents.translated))
		.then((json) => {
			var translatedText = json.contents.translated;
			//console.log(translatedText);
			outputDiv.value = translatedText;
			//outputDiv.innertext = translatedText;
		})
		.catch(errorhandler);
}
btnTranslate.addEventListener('click', clickhandler);
