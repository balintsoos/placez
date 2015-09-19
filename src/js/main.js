(function() {

	var app = angular.module('app', []);
	
	app.controller('navItemsController', function() {
		this.items = navItems;
	});
	
	var navItems = [
		{id:'search', name:'Search'},
		{id:'profile', name:'Profile'}
	];

})();