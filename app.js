var = args = process.argv;
var flagPresent =[];

args.forEach(function(item){
	if(item=== '--sum' || item== '--product'){
		flagPresent.push(item)
	}
});

if(flagPresent.length !== 1){
	throw "error"
}
if(flagPresent.length !== 1){
	throw "error"
}
function isNumber(){
	return !isNaN(parseFloat(x));
}
var numbers = args.filter(isNumber).map(parseFloat);
var result;

if(flagPresent[0] === '--sum'){
	result = numbers.reduce(function(a,b){return a + b})
}

if(flagPresent[0] === '--product'){
	result = numbers.reduce(function(a,b){return a * b})
}