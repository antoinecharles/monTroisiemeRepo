var counter = 0;

function iterate(){
	console.log(counter);
	counter = counter + 1;
	console.log(counter);
	document.getElementById("count").innerHTML = counter;
}