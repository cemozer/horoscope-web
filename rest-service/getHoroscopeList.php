<?php

// array for JSON response
$response = array();

// include db connect class
require_once __DIR__ . '/db_connect.php';

// connecting to db
$db = new DB_CONNECT();


	$result = mysql_query("SELECT ID, NAME, TEXT FROM HOROSCOPE ORDER BY ID ASC ");


	// check for empty 
	if (mysql_num_rows($result) > 0) {
		// looping through all results
       		$response["data"] = array();
        	while ($row = mysql_fetch_array($result)) {
					$item = array();
	                $item ["id"] = $row["ID"];
	                $item ["name"] = $row["NAME"];
	                $item ["text"] = $row["TEXT"];

                array_push($response["data"], $item);
            }
	    // success
            $response["success"] = 1;

	    // echoing JSON response
            echo json_encode($response);
        } else {
	    // no products found
            $response["success"] = 0;
            $response["data"] = null;
            
	    // echo no users JSON
            echo json_encode($response);
        }

?>