var assert = chai.assert;
var expect = chai.expect;

describe("The Angular Test App", function(){
	describe("The contacts service", function(){
		beforeEach(function(){
			module('services');
			inject(function($injector){
				contactService = $injector.get('contactSrv');
				$httpBackend = $injector.get('$httpBackend');
			});
		});


		it("Should have a property contacts, an array", function(){
			expect(contactService.contacts).to.be.an('array');
		});


		it("Should call http backend",function(){
			$httpBackend.expectGET('http://localhost:9001/contacts')
				.respond(200,[]);
			$httpBackend.flush();
		});
	});

	describe("The contact Controller",function(){
		beforeEach(function(){
			module('services');
			module('controllers');
			inject(function($injector,$rootScope){
				$scope = $rootScope.$new();
				contactService = $injector.get('contactSrv');
				$httpBackend = $injector.get('$httpBackend');
				$controller = $injector.get('$controller');
			});
		});


		it("Should have array contacts in scope", function(){
			$controller('contactsCtrl', {$scope:$scope,contactSrv: contactService});
			assert.isArray($scope.contacts);
		});
	});

	describe("The format to string fillter",function(){
		beforeEach(function(){
			module('filtters');
			inject(function($injector){
				proper = $injector.get("$filter")("proper");
			});
		});

		it("Should proper case a string", function(){
			expect(proper("new stark")).to.equal("New Stark");
		});

		it("Should take a number a return as string", function(){
			expect(proper(42)).to.equal("42");
		});

		it("Should trow a error on an incompatible type",function(){
			assert.throws(function(){proper(undefined)});
		});
	});

	describe("Chak Avatar directive", function(){
		beforeEach(function(){
			module('directives');
			module('filtters');
		});

		it("Should capitalized first latter", function(){
			inject(function($rootScope,$compile){
				$rootScope.contact = {name:'oshri kdoshim'};
				var element = $compile('<avatar name=contact.name/>')($rootScope);
				$rootScope.$digest();
				var dirText = element.text();
				expect(dirText).to.equal("O");
			});
		});
	});
});