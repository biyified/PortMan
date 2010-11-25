// JavaScript Document
$(document).ready(function() 
						   {
							   $('.tableHolder tr:nth-child(even)').addClass('alt');
							   $(".menuItem ul").slideUp(0);
							   
							   $(".menuItem").toggle(function()
															   {
																   // $(".menuItem ul").hide("fast");
																 		$( this ).children('ul').slideDown(500);
																   }, 
																   function()
																   {
																	   $( this ).children('ul').slideUp(500);
																	  });

							
							    size ();
							 
							 $(window).bind("resize",   function()
								{
									      size ();
								});
 
});

  function size ()
{
	var myWidth = 0, myHeight = 0;
	 if( typeof( window.innerWidth ) == 'number' ) {
										//Non-IE
	myWidth = window.innerWidth;
	myHeight = window.innerHeight;
	} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
										//IE 6+ in 'standards compliant mode'
		myWidth = document.documentElement.clientWidth;
	myHeight = document.documentElement.clientHeight;
	} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
										//IE 4 compatible
										myWidth = document.body.clientWidth;
										myHeight = document.body.clientHeight;
									  }
								  
									 $( "#contentArea").css('height',myHeight);
								  	$( "#contentArea").css('max-height',myHeight);
								  	$("#contentArea").css('overflow', "scroll");
								 	$('#formPanel').css('height',myHeight - 300 );
}
