<?php

	require_once __DIR__ . '/db_config.php';
	
	$response = array();
	$response["data"] = array();
	$response["status"] = "fail";
	
	$db = pg_connect(PG_CON_STR);
	if(!$db) echo json_encode($response);


	$sql = "SELECT ID, NAME, TEXT FROM HOROSCOPE ORDER BY ID ASC ";


	$rs = pg_query($db, $sql);
	
	if(!$rs) echo json_encode($response);
	
	while($row = pg_fetch_row($rs){
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