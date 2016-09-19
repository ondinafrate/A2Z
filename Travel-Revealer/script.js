var output;
var submit;

function setup(){
	console.log(this);
	noCanvas();
	textfield = select("#input");
	output = select('#output');
	submit = select('#submit');
	submit.mousePressed(newText);
}

function highlight(){
	//console.log(this.html());
	this.html('Travel');
	var c = color(random(100), random(255), random(255));
	this.style('background-color', c);
}

function newText(){
	var s = textfield.value();
	var r = /\b[A-La-l]+\b/g;

	var newstring = s.replace(r, replacer);
	//console.log(newstring);
	// createP(newstring);

	//var words = s.replace(/\b[A-La-l]{4}\b/);
	// //(/[aeiou])/g, "$1$1");
	// //(/\w{8}, "Thailand");
	// //console.log(words);
	for (var i = 0; i < newstring.length; i++){

	var span = createSpan(newstring[i]);
	span.parent(output);

	if(!/(\b[A-La-l]{4}\b)/.test(newstring[i])){
		span.mouseOver(highlight);
	}

	
	
}


}

function replacer(match){
		console.log(match);

		if(match.length == 4){
			return match.toUpperCase();

		}else{

		return "Thailand";
	}
}

