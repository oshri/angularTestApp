(function(angular){
	'use strict';

	var mi = angular.module('filtters')
				.filter('proper', properFil);

	function properFil (){
		return function(name){
			var type = typeof name;
			if (type !== 'number' && type !== 'string') throw new Error();
			return name.toString().split(" ").map(function(word){
				return word[0].toUpperCase().concat(word.slice(1));
			}).join(" ");
		};
	}

})(window.angular);