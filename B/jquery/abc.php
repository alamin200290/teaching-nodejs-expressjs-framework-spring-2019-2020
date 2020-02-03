<?php
	
	$mydata =  $_GET['mydata'];

	$data = json_decode($mydata);

	//$json = '{"name": "alamin", "age": 12, "dept":"cs"}';	
	//$array = ['name'=>'alamin', 'age'=>11, 'dept'=>'CS'];
	//header('Content-Type: application/json');
	echo $data->name;
?>