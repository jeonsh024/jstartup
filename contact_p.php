<?

//print_r($_POST);
//[name] => 1 
//[company-name] => 2 
//[mobile] => Array ( [0] => 3 [1] => 4 [2] => 5 ) 
//[email1] => 6 [email2] => 7 
//[your-message] => 8 

echo "<script>
alert('감사합니다');
document.location = '/';
</script>";

$to = "jstartup2019@gmail.com";
$subject = "jstartup 문의 > ".$_POST['name'];

$message = "
회사명 : ".$_POST['your-message']."
전화번호 : ".$_POST['mobile'][0]."-".$_POST['mobile'][1]."-".$_POST['mobile'][2]."
email : ".$_POST['email1']."@".$_POST['email1'][0]."

".$_POST['your-message'];

//die($message);

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <webmaster@jstartup.kr >' . "\r\n";
//$headers .= 'Cc: myboss@example.com' . "\r\n";

mail($to,$subject,$message,$headers);


?>

