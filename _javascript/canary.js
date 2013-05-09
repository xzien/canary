/*
  ____                               ____            _             
 / ___|__ _ _ __   __ _ _ __ _   _  |  _ \  ___  ___(_) __ _ _ __  
| |   / _` | '_ \ / _` | '__| | | | | | | |/ _ \/ __| |/ _` | '_ \ 
| |__| (_| | | | | (_| | |  | |_| | | |_| |  __/\__ \ | (_| | | | |
 \____\__,_|_| |_|\__,_|_|   \__, | |____/ \___||___/_|\__, |_| |_|
                             |___/                     |___/       
 _____                                            _    
|  ___| __ __ _ _ __ ___   _____      _____  _ __| | __
| |_ | '__/ _` | '_ ` _ \ / _ \ \ /\ / / _ \| '__| |/ /
|  _|| | | (_| | | | | | |  __/\ V  V / (_) | |  |   < 
|_|  |_|  \__,_|_| |_| |_|\___| \_/\_/ \___/|_|  |_|\_\
                                                       
CANARY DESIGN FRAMEWORK 2012.
Full copyright and rights belong to Stephen Kerr and Xzien.com

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

	CANARY DESIGN FRAMEWORK
	A simple and flexible framework for HTML, CSS and javascript
	To provide a flexible and stable interface to help developers
	quickly design and build interfaces and prototypes with 
	responsive design.
	
	Designed by Stephen Kerr of Xzien on the 10th of April 2012
	Latest version: 10th of April 2012
	Find more at http://xzien.com/projects/canary
	
*/

jQuery(function(){
	
	jQuery(".pop-over").stop().hover(function(){
		
		w = jQuery(this).width();
		w = w+20;
		w = w+"px";
		
		
		var content = jQuery(this).attr("data-content");
		jQuery(this).append("<div store='"+w+"' style='left: 0px;' id='popover'>"+content+"</div>");
		jQuery("#popover", this).animate({
			"left": w,
			"opacity": "1",
		}, 200);
	}, function(){
		jQuery("#popover", this).remove();
	}).stop();
	
	
	jQuery(".search.expand").focus(function(){
		expand = jQuery(this).attr("data-grow");
		jQuery(this).animate({
			"width": "+="+expand, 
		}, 250);
	});
	jQuery(".search.expand").blur(function(){
		expand = jQuery(this).attr("data-grow");
		jQuery(this).animate({
			"width": "-="+expand, 
		}, 180);
	});
	
});