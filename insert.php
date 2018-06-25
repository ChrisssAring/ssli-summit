<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$link = mysqli_connect("localhost", "ssli-chrisaring", "SurrealLem0n!", "ssli_test");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
$list = array(",", "$");

// Escape user inputs for security
$organization = mysqli_real_escape_string($link, $_REQUEST['organization']);
$title = mysqli_real_escape_string($link, $_REQUEST['title']);
$imageurl = mysqli_real_escape_string($link, $_REQUEST['image-url']);
$description = mysqli_real_escape_string($link, $_REQUEST['description']);
$city = mysqli_real_escape_string($link, $_REQUEST['city']);
$statecode = mysqli_real_escape_string($link, $_REQUEST['state-code']);
$salarymin = str_replace($list, "", mysqli_real_escape_string($link, $_REQUEST['salary-min']));
$salarymax = str_replace($list, "", mysqli_real_escape_string($link, $_REQUEST['salary-max']));
$date = mysqli_real_escape_string($link, $_REQUEST['date']);
$pageurl = mysqli_real_escape_string($link, $_REQUEST['page-url']);
$opportunitytype = mysqli_real_escape_string($link, $_REQUEST['opportunity-type']);

 
// attempt insert query execution
$sql = "INSERT INTO opportunities (organization, title, image_url, description, city, state_code, salary_min, salary_max, date, page_url, opportunity_type) VALUES 
('$organization', '$title', '$imageurl', '$description','$city','$statecode','$salarymin','$salarymax','$date','$pageurl','$opportunitytype')";
if(mysqli_query($link, $sql)){
    echo "Records added successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
 
// close connection
mysqli_close($link);
?>