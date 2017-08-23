/*JavaScript Document

Michael Nguyyen
ICT 4510
Final Project
Date: 03/13/2014
this script to apply the google map into the about us page

*/
$(document).ready(function() {
$('#map').goMap({
    latitude : 39.762284,
    longitude : -105.013336,
    zoom : 16,
    scaleControl : true,
    maptype : 'SATELLITE'
}); // end goMap


$.goMap.createMarker({  
	   latitude : 39.762284,
	   longitude :  -105.013336,
	   title : 'Our location',
	   html : {
	     content : '<p>2215 W 32nd Ave, Denver, CO 80211</p>',
		 popup : true   
	   }
}); // end createMarker

}); // end ready
