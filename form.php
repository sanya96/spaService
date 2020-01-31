<?php
$to = 'sanya042014@gmail.com';
$subject = 'New application from the site Spa-Service.club';

$message = '
<html>
<head>
  <title>New application from the site Spa-Service.club</title>
</head>
<body>
  <h2>New application from the site Spa-Service.club</h2>
  <table>
    <tr style="background: #b3d4fc;">
      <td><b>Name: </b></td><td>' . $_POST['name'] . '</td>
    </tr>
    <tr style="background: #b3d4fc;">
      <td><b>Email: </b></td><td>' . $_POST['email'] . '</td>
    </tr>
    <tr style="background: #b3d4fc;">
      <td><b>Phone Number: &nbsp;&nbsp;&nbsp;&nbsp;</b></td><td>' . $_POST['phone'] . '</td>
    </tr>
    <tr style="background: #b3d4fc;">
      <td><b>Message: </b></td><td>' . $_POST['message'] . '</td>
    </tr>
  </table>
</body>
</html>
';
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
$headers .= "From:  Spa-Service.club";

mail($to, $subject, $message, $headers);
?>
