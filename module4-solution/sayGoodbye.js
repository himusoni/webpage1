(function (window) {
	var byehimu={};
	var word="Good Bye ";
	byehimu.tell=function(names){
		console.log(word + names);
	}
	window.byehimu=byehimu;
})(window);