(function(angular){
	'use strict';

	var mi = angular.module('controllers')
				.controller('contactsCtrl', contactsCtrl);

	function contactsCtrl ($scope, contactSrv){
		$scope.contacts = contactSrv.contacts;
	}

	contactsCtrl.$inject = ['$scope','contactSrv'];

})(window.angular);