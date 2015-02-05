<?php

	require_once __DIR__ . '/db_config.php';
	
	$response = array();
	$response["data"] = array();
	$response["status"] = "fail";
	$response["message"] = "";
	
	$db = pg_connect(PG_CON_STR);
	if(!$db){
		$response["message"]= pg_last_error();
		echo json_encode($response);
		exit();
	} 


	$sql = "SELECT ID, NAME, TEXT FROM HOROSCOPE ORDER BY ID ASC ";


	$rs = pg_query($db, $sql);
	
	if(!$rs){
		$response["message"]= pg_last_error();
		echo json_encode($response);
		exit();
	} 
	
	while($row = pg_fetch_row($rs)){
		$item = array();
		$item["id"] = $row[0];
		$item["name"] = $row[1];
		$item["text"] = $row[2];
		
		array_push($response["data"], $item);
	}

	$response["status"] = "success";

	echo json_encode($response);
	
	pg_close($db);

?>