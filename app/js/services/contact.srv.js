(function(angular){
	'use strict';

	var mi = angular.module('services')
				.service('contactSrv', contactSrv);

	function contactSrv ($http) {
		var self = this;
		this.contacts = [];

		$http.get("http://localhost:9001/contacts").then(function(res){
			while (res.data[0]) {
				self.contacts.push(res.data.pop());
			}
		});

	}

	contactSrv.$inject = ['$http'];

})(window.angular);