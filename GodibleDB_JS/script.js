/* 
* Godible DB
* script.js
* by Aki Saito
*/

$(document).ready(function() {
	$('.nav-trigger').click(function() {
		$('.side-nav').toggleClass('visible');
	});
});

/*
* Retrieve input fields
*
* @param
* @return
*/


/*
* Retrieve input fields and parses to json
*
* @param
* @return
*/


/*
* Input validations 
*
* @param
* @return
*/

// Input variables
let bkName = document.getElementById('bName').value;
let bkNumber = document.getElementById('bNumber').value;
let bkId = document.getElementById('bId').value;
let ptName = document.getElementById('pName').value;
let ptNumber = document.getElementById('pNumber').value;
let ptId = document.getElementById('pId').value;
let chptrName = document.getElementById('cName').value;
let chptrNumber = document.getElementById('cNumber').value;
let chptrId = document.getElementById('cId').value;
let audioString = document.getElementById('audio').value;
let languageString = document.getElementById('language').value;


let button = document.querySelector('.button');
let buttonText = document.querySelector('.tick');

const tickMark = "<svg width=\"58\" height=\"45\" viewBox=\"20 0 20 75\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";

buttonText.innerHTML = "Submit";

button.addEventListener('click', function() {
	submitForm();
	if (buttonText.innerHTML !== "Submit") {
		buttonText.innerHTML = "Submit";
	} 
	else if (buttonText.innerHTML === "Submit") {
		buttonText.innerHTML = tickMark
	}
	this.classList.toggle('button__circle');
});

function submitForm() {
	const data = { 
		bookNumber: bkNumber,
		bookName: bkName,
		bookId: bkId,
		partNumber: ptNumber,
		partName: ptName,
		partId: ptId,
		chapterId: chptrId,
		chapterNumber: chptrNumber,
		chapterName: chptrName,
		audio: audioString,
		language: languageString
	}
	const formData = JSON.stringify(data, null, " ");

	alert(formData);
}

