function resizeDiv() 
{
	$('section').css('height', $(window).height()+'px');
} 
window.onresize = function(event) 
{
	resizeDiv();
}
resizeDiv();


// click animation

if (Modernizr.touch) 
{   
    $('.button').not('.disabled').on('touchstart',function(e) {
		var parentOffset = $(this).offset(); 
		var left = e.pageX - parentOffset.left;
		var top = e.pageY - parentOffset.top;
		$(this).append('<div class="dot" style="top:'+top+'px;left:'+left+'px;"></div>');
		setTimeout(function(){
			$('.button .dot:first-of-type').remove();
		},3000);
	}); 
    document.body.addEventListener('touchmove',function(e){
	e.preventDefault();
    });
} 
else 
{   
    $('.button').not('.disabled').on('mousedown',function(e) {
	   var parentOffset = $(this).offset(); 
	   var left = e.pageX - parentOffset.left;
	   var top = e.pageY - parentOffset.top;
		$(this).append('<div class="dot" style="top:'+top+'px;left:'+left+'px;"></div>');
		setTimeout(function(){
			$('.button .dot:first-of-type').remove();
		},3000);
	}); 
}

