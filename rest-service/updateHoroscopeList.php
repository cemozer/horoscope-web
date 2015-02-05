<?php

	require_once __DIR__ . '/db_config.php';
	
	$response = array();
	$response["data"] = array();
	$response["status"] = "fail";
	$response["message"] = "";
	
	$db = pg_connect(PG_CON_STR);
	if(!$db){
		$response["message"]= pg_last_error();
		echo json_encode($response, JSON_UNESCAPED_UNICODE );
		exit();
	} 

	if($_SERVER['REQUEST_METHOD'] == "POST")
	{

		$data = file_get_contents("php://input");
		$postData = json_decode($data);
	
		$items = $postData;
		
		foreach($items as &$item){
			$sql = "UPDATE HOROSCOPE.HOROSCOPE SET TEXT = '{$item->text}' WHERE ID = '{$item->id}'";
			pg_query($db, $sql);
		}
	
		$response["status"] = "success";
		echo json_encode($response, JSON_UNESCAPED_UNICODE );
	}else{
		$response["message"]= "Only POST supported";
		echo json_encode($response, JSON_UNESCAPED_UNICODE );
	}

?>