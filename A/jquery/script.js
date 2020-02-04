$(document).ready(function(){

	/*$('input[type=button]').click(function(){
		alert('buttion works');
	});*/

/*	$('#btn1').click(function(){
		$('h1').html($('input[type=text]').val());
	});*/

	$('#btn1').on('click',function(){
		//$('body>h1').html($('input[type=text]').val());

	var json ={
			"name": "alamin", 
			"id": "12-111-2",
			"age": "34"
		};

	var jsonstring = JSON.stringify(json);

		$.ajax({
			url: 'abc.php',
			method: 'GET',
			data: {
				json: jsonstring
			},
			success: function(response){
				//var obj = JSON.parse(response);
				$('body>h1').html(response);
			},
			error: function(error){
				alert(error.status);
			}
		});

	});

});	


/*$(function(){


});
*/
