<?php
 header("Content-Type:application/json;charset=UTF8");
 require("link_sql.php");

// @$userId=$_REQUEST['userId'] or die ('{"code":1,"msg":"userId must required"}')
 @$userPhone=$_REQUEST['userPhone'] or die ('{"code":1,"msg":"userPhone must required"}');

// $sql="SELECT oid FROM kf_order WHERE phone='$userPhone' ";

// $sql="SELECT name,order_time,user_name FROM kf_order,kf_dish WHERE did=(SELECT oid FROM kf_order WHERE phone='$userPhone')"
$sql="SELECT kf_order.oid , kf_order.order_time , kf_order.user_name , kf_dish.did , kf_dish.img_sm FROM kf_order,
 kf_dish
WHERE kf_order.phone='$userPhone' AND kf_order.oid=kf_dish.did";

 $result=mysqli_query($conn,$sql);

 $list=mysqli_fetch_assoc($result);

 echo json_encode($list);
?>