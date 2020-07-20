require.config({
	paths:{
		jquery:'jquery-3.1.0.min'
	}
})

requirejs(['jquery', 'error'], function($, error){
	$('body').css('background-color', 'red');
	error.isEmpty();
})

/*
requirejs(['jquery', 'check'], function($, check){
	$('body').css('background-color', 'red');
	check.isEmpty();
})
*/