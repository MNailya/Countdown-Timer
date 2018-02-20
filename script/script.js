//set options for a timer
const timerOptions = {
	washer: {
		hour: 0,
		min: 40,
		sec: 10
	},
	dryer:{
		hour: 1,
		min: 15,
		sec: 20
	},
	classBreak:{
		hour: 0,
		min: 20,
		sec: 0
	},
	hardBoiledEggs:{
		hour: 0,
		min: 12,
		sec: 0
	},
	softBoiledEggs:{
		hour: 0,
		min: 6,
		sec: 0
	},
	pizza:{
		hour: 0,
		min: 15,
		sec: 0
	},
	popcorn:{
		hour: 0,
		min: 2,
		sec: 35
	},
	jsClass:{
		hour: 3,
		min: 0,
		sec: 0
	},
	testRun:{
		hour: 0,
		min: 0,
		sec: 5
	}
}

// document.querySelector('.timer-options > button').addEventListener('click',(event) =>{
// 	var el = event.target;
// 	const title = timerOptions[el.getAttribute('title')];
// 	console.log(title);
// 	document.querySelector('.timer-options').classList.add('disable');
// 	document.querySelector('.sub-title').style.opacity = 0;
// 	timerFunc(title);
// });

//listen what time option has been chosen

const washer = timerOptions.washer;
document.querySelector('.washer').addEventListener('click',() =>{
	clickBtnActions();
	timerFunc(washer);
});
const dryer = timerOptions.dryer;
 document.querySelector('.dryer').addEventListener('click',() =>{
 	clickBtnActions();
 	timerFunc(dryer);
 });
 const hardBoiledEggs = timerOptions.softBoiledEggs;
 document.querySelector('.hard-boiled-eggs').addEventListener('click',() =>{
 	clickBtnActions();
 	timerFunc(hardBoiledEggs);
 });
 const softBoiledEggs = timerOptions.softBoiledEggs;
 document.querySelector('.soft-boiled-eggs').addEventListener('click',() =>{
 	clickBtnActions();
 	timerFunc(softBoiledEggs);
 });
 const pizza = timerOptions.pizza;
 document.querySelector('.pizza').addEventListener('click',() =>{
 	clickBtnActions();
 	timerFunc(pizza);
 });
 const classBreak = timerOptions.classBreak;
 document.querySelector('.class-break').addEventListener('click',() =>{
 	clickBtnActions();
 	timerFunc(classBreak);
 });
 const popcorn = timerOptions.popcorn;
 document.querySelector('.popcorn').addEventListener('click',() =>{
 	clickBtnActions();
 	timerFunc(popcorn);
});
const jsClass = timerOptions.jsClass;
document.querySelector('.js-class').addEventListener('click',() =>{
	clickBtnActions();
	timerFunc(jsClass);
});
const testRun = timerOptions.testRun;
document.querySelector('.test-run').addEventListener('click',() =>{
	clickBtnActions();
	timerFunc(testRun);
});
//disable all buttons and update current progress
const clickBtnActions = ()=>{
	document.querySelector('.timer-options').classList.add('disable');
 	document.querySelector('.sub-title').innerHTML = 'Countdown in progress...';
}
//timer function
const timerFunc = (time) =>{
	//set the timer
	let sec = time.sec;
	let min = time.min;
	let hour = time.hour; 
	//print out the timer values
	document.querySelector("#seconds").innerHTML= (`0${sec}`).slice(-2);
	document.querySelector("#minutes").innerHTML= (`0${min}`).slice(-2);
	document.querySelector("#hours").innerHTML= (`0${hour}`).slice(-2);
	//count down function
	const countDown = setInterval(function(){
		if(sec<1 && min===0 && hour===0){
			sec = 0;
			document.querySelector("#seconds").innerHTML= (`0${sec}`).slice(-2);
			//stop setInterval
			clearInterval(countDown);
			//alert that countdown is over
			document.querySelector('.sub-title').innerHTML = 'Time is up!!!';
			document.querySelector('.counter').classList.add('alert');
			//reactivate buttons and chnage sub title text after 5 second delay
			setTimeout(function(){
				document.querySelector('.sub-title').innerHTML = 'Choose another timer:';
				document.querySelector('.timer-options').classList.remove('disable');
				document.querySelector('.counter').classList.remove('alert');
			},5000);
		} else {
			if (sec>0){
				sec=sec-1;
				document.querySelector("#seconds").innerHTML= (`0${sec}`).slice(-2);
			} else if (sec === 0) {
				sec = 59;
				document.querySelector("#seconds").innerHTML= (`0${sec}`).slice(-2);
				if (min>0){
					min=min-1;
					document.querySelector("#minutes").innerHTML= (`0${min}`).slice(-2);
				} else if (min === 0){
					min = 59;
					document.querySelector("#minutes").innerHTML= (`0${min}`).slice(-2);
					if (hour>0){
						hour = hour -1;
						document.querySelector("#hours").innerHTML= (`0${hour}`).slice(-2);
					} else if (hour===0) {
						hour = 0;
						document.querySelector("#hours").innerHTML= (`0${hour}`).slice(-2);
					} else if (hour ==0 && min ==0){
						min=0;
						document.querySelector("#minutes").innerHTML= (`0${min}`).slice(-2);
					} 
				}
			}
		}
	//set the interval loop to restart every 1000 (1 sec)
	},1000);
}	

//call timer through console.log with a string
const timer = (consoleText) =>{
	const updConsoleText = consoleText.toLowerCase();
	if (updConsoleText === 'washer'){
		timerFunc(washer);
	} else if (updConsoleText === 'dryer'){
		timerFunc(dryer);
	} else if (updConsoleText === 'class break'){
		timerFunc(classBreak);
	} else if (updConsoleText === 'hard boiled eggs'){
		timerFunc(hardBoiledEggs);
	} else if (updConsoleText === 'soft boiled eggs'){
		timerFunc(softBoiledEggs);
	} else if (updConsoleText === 'pizza'){
		timerFunc(pizza);
	} else if (updConsoleText === 'popcorn'){
		timerFunc(popcorn);
	} else if (updConsoleText === 'js class'){
		timerFunc(jsClass);
	} else if (updConsoleText === '5sec test run'){
		timerFunc(testRun);
	} else {
		console.log('Oops! There is no such timer. Try again');
	}
}