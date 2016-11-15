// Work with Login/Signup dialog
$('.loginBtn').click(function(event) {
	$("#login").show();
	$('#tab-1').prop('checked',true);
});

$('.signUpBtn').click(function(event) {
	$("#login").show();
	$('#tab-2').prop('checked',true);
});

$('.custom-close').click(function(event) {
	$("#login").hide();
});
