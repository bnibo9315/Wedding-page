<?php
header('Content-Type: application/json');

$connect = mysqli_connect("localhost", "id17537787_longadmin", "LongNhi93152022.", "id17537787_data_wedding");
if (!$connect) {
    // echo reponse(mysqli_connect_error(), false);
} 
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $name = $_POST['username'];
    $phone =  $_POST['phone'];
    $number = $_POST['number'];
    $type_user =  $_POST['type_user'];
    $messeger =  $_POST['messeger'];
    if (empty($messeger)) {
        $messeger = "không có tin nhắn";
    }
    $sql = "INSERT INTO thongtinkhac (`ten`,`sdt`,`soluong`,`kieukhachmoi` ,`tinnhan`,`thoigian`) VALUE ('$name','$phone','$number','$type_user','$messeger',CURRENT_TIMESTAMP) ";
    if (mysqli_query($connect, $sql)) {
        echo reponse('Gửi tin nhắn thành công', true);
    } else {
        echo reponse('Gửi tin nhắn thất bại', false,);
    }
}
function reponse($data, $status)
{
    $output = array(
        'mess' => $data,
        'status' => $status
    );
    return json_encode($output);
}
