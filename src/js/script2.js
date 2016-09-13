$(function() {
	var $element = $('.hover');

	$element.hover(function(e){
		var $hover = $('.hover');
		
		$hover.on('mouseover', function(){

			var $hint = $(this).siblings('.hint');
			$hint.show();

		});
		$hover.on('mouseout', function(){

			var $hint = $(this).siblings('.hint');
			$hint.hide();
			
		});
		
	});

	var $submit = $('#submit');
	$submit.on('click', function(){
		var $element = $('.wrapper');
		var $hint = $element.find('.hint');
		$hint.show();

	});
	$element.focusin( function(e){
		var $hint = $(this).siblings('.hint');
			$hint.show();

	});
	$element.focusout(function(e){
		var $hint = $(this).siblings('.hint');
			$hint.hide();

	});

})




















