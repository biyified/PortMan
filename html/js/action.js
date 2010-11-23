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
								
							   
							   });
