<?php
  header("Content-Type:application/json");

  require('link_sql.php');

  @$detailId=$_REQUEST['did'] or die("{'msg':'did must required'}");

  $sql="SELECT * FROM kf_dish WHERE did='$detailId'";

  $result=mysqli_query($conn,$sql);

  $list=mysqli_fetch_assoc($result);

  echo json_encode($list);