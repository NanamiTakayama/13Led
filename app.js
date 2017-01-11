var mraa = require("mraa");
var led = new mraa.Gpio(13); 
var v = 0;
console.log("____AppStarted____");

setInterval(function(){
	v = v ? 0:1;
	if(v){
		console.log("LED ON with isaax 1209");
		led.dir(mraa.DIR_OUT);
	}else{
		console.log("LED OFF with isaax 1209");
	}led.write(v);},5000);

