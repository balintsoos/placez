(function() {
	
	var app = angular.module('app', []);
	
	app.controller('navItemsController', function() {
		this.items = navItems;
	});
	
	var navItems = [
		{id:'search', name:'Search'},
		{id:'profile', name:'Profile'}
	];

	var $container = $('.masonry-container');
	$container.imagesLoaded()
		.always(function(instance) {
			console.log('all images loaded');
			$container.masonry({
				columnWidth: '.item',
				itemSelector: '.item',
			});
		});
})();