$(document).ready(function() {    
    $("body").css("opacity", "1");
  });
$('#ST').click(function() {		
		$('.content').fadeOut('fast')
		setTimeout(function(){
			$('#Structure').fadeIn('fast')
		},250)
})
$('#Poln').click(function() {		
		$('.content').fadeOut('fast')
		setTimeout(function(){
			$('#Polnomochia').fadeIn('fast')
		},250)
})
