<?php
  header("Content-Type:application/json;charset=UTF8");
  require("link_sql.php");
  @$phone=$_REQUEST['user_phone'] or die("{'msg':'user_phone must required'}");
  @$user=$_REQUEST['user_name'] or die("{'msg':'user_name must required'}");
  @$sex=$_REQUEST['user_sex'] or die("{'msg':'user_sex must required'}");
  $time=time()*1000;
  @$addr=$_REQUEST['user_addr'] or die("{'msg':'user_addr must required'}");
  @$did=$_REQUEST['kfl_did'] or die("{'kfl_did':'kfl_did must required'}");

  $sql="INSERT INTO kf_order VALUES(NULL,'$phone','$user','$sex','$time','$addr','$did')";

  $result=mysqli_query($conn,$sql);

  if($result){
   $output['code']=mysqli_insert_id($conn);
   $output['msg']="succ";
  }
  else{

  $output['msg']="fail";
  }

echo json_encode($output);
?>