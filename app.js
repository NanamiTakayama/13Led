var mraa = require("mraa");
var led = new mraa.Gpio(13); 
var v = 0;
setInterval(function(){
	v = v ? 0:1;
	if(v){
		console.log("LED ON with isaax hikarie");
		led.dir(mraa.DIR_OUT);
	}else{
		console.log("LED OFF with isaax hikarie");
	}led.write(v);},10000);

