(function(angular){
	'use strict';

	var mi = angular.module('directives')
				.directive('avatar', avatarDir);

	function avatarDir (){
		return {
			restrict: 'AE',
			scope: {
				name: '='
			},
			template: "<span class='avatar'>{{ name[0] | proper }}</span>"
		};
	}


})(window.angular);