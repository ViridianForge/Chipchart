
$(document).ready(function() {

	// We might need a touch right here to grab the size elements
	// of the submission form and alter them to better match the screen
	$("#subForm").width($(window).width()*0.3);
	$("#subForm").height($(window).height()*0.9);
	
	//Prep the iframe dialog
	$("#subDialog").dialog({
		autoOpen: false,
		modal: true,
		maxWidth: $(window).width()*0.3,
		maxHeight: $(window).width()*0.8,
		width: $(window).width()*0.3,
		height: $(window).width()*0.8,
		show: {
			effect: "slide",
			duration: 333
		},
		hide: {
			effect: "slide",
			duration: 333
		}
	});
		
	//Prep the button to open the iframe
	$("#dialogButton").click(function(){
		$("#subDialog").dialog("open");
	});
	
	//Major props on helping figure out populating a DataTables table from Google Sheets to raza
	//from:  http://datatables.net/forums/discussion/5611/how-to-grab-datatables-data-from-a-google-spreadsheet
	
	//Original sAjaxSource
	//"<a href="https://spreadsheets.google.com/feeds/list/1fSwmSAB-qluTvy8YiTgunHKFbJsKMLg36xDNp8uhFIk/od6/public/values?alt=json"" target="_blank" rel="nofollow">https://spreadsheets.google.com/feeds/list/1fSwmSAB-qluTvy8YiTgunHKFbJsKMLg36xDNp8uhFIk/od6/public/values?alt=json"</a>",
	
  $('#chipcharttable').DataTable({
    "bServerSide":false,
	"bProcessing":true,
	"iDisplayLength":15,
	"language":{
		"lengthMenu": "Display <select><option value='10'>10</option><option value='15'>15</option><option value='30'>30</option></select> records per page"
	},
	"sAjaxDataProp":"feed.entry",
	"sAjaxSource":"https://spreadsheets.google.com/feeds/list/1fSwmSAB-qluTvy8YiTgunHKFbJsKMLg36xDNp8uhFIk/od6/public/values?alt=json",
	"aoColumns":[
		{ "title": "Title", "mData": "gsx$title.$t"},
		{ "title": "Artist Name", "mData": "gsx$artistname.$t", "visible":false},
		{ "title": "Artist Website", "mData": "gsx$artistwebsite.$t", "visible":false},
		{ "title": "Artist", "mData": "gsx$artist.$t"},
		{ "title": "Label Name", "mData": "gsx$labelname.$t", "visible":false},
		{ "title": "Label Website", "mData": "gsx$labelwebsite.$t", "visible":false},
		{ "title": "Label", "mData": "gsx$label.$t"},
		{ "title": "Release Date", "mData": "gsx$releasedate.$t"},
		{ "title": "Available At Address", "mData": "gsx$availableataddress.$t", "visible":false},
		{ "title": "Available At", "mData": "gsx$availableat.$t"},
		{ "title": "Genre", "mData": "gsx$genre.$t", "visible":false}
	],
	"aaSorting":[[7,"desc"]]
    });
});
