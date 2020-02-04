<?php
	

	$json = $_GET['json'];
	$data = json_decode($json);

	//$json ='{"name": "alamin", "id": "12-111-2","age": "34"}';
	
	//$data = ['name'=>'test', 'id'=>'12'];

	//header('Content-type: application/json');
	echo $data->name;
?>