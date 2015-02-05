<?php

	require_once __DIR__ . '/db_config.php';
	
	$response = array();
	$response["data"] = array();
	$response["status"] = "fail";
	
	$db = pg_connect(PG_CON_STR);
	if(!$db) echo json_encode($response);

	if($_SERVER['REQUEST_METHOD'] == "POST")
	{

		$data = file_get_contents("php://input");
		$postData = json_decode($data);
	
		$items = $postData;
		
		foreach($items as &$item){
			$sql = "UPDATE HOROSCOPE SET TEXT = '{$item->text}' WHERE ID = '{$item->id}'";
			pg_query($db, $sql);
		}
	
		$response["status"] = "success";
		echo json_encode($response);
	}else{
		echo json_encode($response);
	}

?>