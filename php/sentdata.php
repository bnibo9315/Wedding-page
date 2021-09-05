<?php

$connect = mysqli_connect("localhost", "id17537787_longadmin", "LongNhi93152022.", "id17537787_data_wedding");
mysqli_set_charset($connect, 'utf8');
if (isset($_POST['submit'])) {

  $name = mysqli_real_escape_string($connect, $_POST['username']);
  $phone = mysqli_real_escape_string($connect, $_POST['phone']);
  $number = mysqli_real_escape_string($connect, $_POST['number']);
  $type_user = mysqli_real_escape_string($connect, $_POST['type_user']);
  $messeger = mysqli_real_escape_string($connect, $_POST['messeger']);

  $sql = "INSERT INTO thongtinkhac (`ten`,`sdt`,`soluong`,`kieukhachmoi` ,`tinnhan`,`thoigian`) VALUE('$name','$phone','$number','$type_user','$messeger',CURRENT_TIMESTAMP) ";
  $query = mysqli_query($connect,$sql);
  header("Location: /");
}
