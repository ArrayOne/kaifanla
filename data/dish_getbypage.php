<?php
  header("Content-Type:application/json");

  require('link_sql.php');


  @$kw=$_REQUEST['kw'] ;//or die('{"code":1 , "msg":"kw is required"}');

  @$start=$_REQUEST['start'];
  @$count=$_REQUEST['count'];
  /*如果客户端没有做任何设置，那么每次只默认从0开始查*/
  if($start==null) $start=0;
  if($count==null) $count=5;
/*默认每次只查询五个数据*/


  if($kw==null){//如果用户没有输入查询关键字
     $sql="SELECT * FROM kf_dish LIMIT $start,$count";
     $sql2="SELECT COUNT(*) FROM kf_dish";
  }
  else{//如果用户输入查询关键字
    $sql="SELECT * FROM kf_dish WHERE name LIKE '%$kw%' or detail LIKE '%$kw%' LIMIT $start,$count";
    $sql2="SELECT COUNT(*) FROM kf_dish  WHERE name LIKE '%$kw%' or detail LIKE '%$kw%' ";

  }



  $result=mysqli_query($conn,$sql);

  $result2=mysqli_query($conn,$sql2);

   /*记录数据中的数据数*/
  $output['recordCount']=intval(mysqli_fetch_row($result2)[0]);

 // var_dump($output['recordCount']);

  $list=mysqli_fetch_all($result,1);

  $output["data"]=$list;
 // echo  json_encode($list);
     echo json_encode($output);
?>