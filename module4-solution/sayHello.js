(function (window) {
	var hellohimu={};
	var word="Hello ";
	hellohimu.tell=function(names){
		console.log(word + names);
	}
	window.hellohimu=hellohimu;
})(window);