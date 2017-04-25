var counter = 0;

function iterate(){
	console.log(counter);
	counter = counter + 1;
	console.log(counter);
	updateCount();
}
function reset(){
	counter = 0;
	updateCount();
}
function updateCount(){
	document.getElementById("count").innerHTML = counter;
}
