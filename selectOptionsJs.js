
$(document).ready(function(){
  var upText=document.getElementById("staff_title").value.toUpperCase()
  $('#service_provider').find("option:contains('"+upText+"')").attr('selected', 'selected');

});
  var emailtext=document.getElementById("staff_title").value.toLowerCase().replace(" ", ""); 
document.getElementById("email").value=emailtext+"@llsalon.com";

document.getElementById("password").value="ll@123";
document.getElementById("description").value="Coming Soon !!";
