<?php

// array for JSON response
$response = array();

// include db connect class
require_once __DIR__ . '/db_connect.php';

// connecting to db
$db = new DB_CONNECT();

if($_SERVER['REQUEST_METHOD'] == "POST")
{

	$data = file_get_contents("php://input");
 
	$postData = json_decode($data);

	$items = $postData;
	
	foreach($items as &$item){
		mysql_query("UPDATE HOROSCOPE SET TEXT = '{$item->text}' WHERE ID = '{$item->id}'");
	}

	$response["success"] = 1;
	echo json_encode($response);
}else{
	$response["success"] = 0;
	echo json_encode($response);
}

?>