jQuery(document).ready(function($){
	var offset = 0.8;


	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(); });
	});

	function showBlocks() {
		var blocks=$('.cd-timeline-block');
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img ').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}
});