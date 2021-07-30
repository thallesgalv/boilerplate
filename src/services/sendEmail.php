<?php
$nome = $_POST['nome'];
$email = $_POST['email'];
$send_date = date('d/m/Y');
$send_time = date('H:i:s');


$body = "
<html>
<head><meta charset='utf-8' /><head>
<body>
<h1>Enviado pelo formulário do site</h1>
<p><strong>Nome:</strong> $nome</p><br>
<p><strong>Email:</strong> $email</p><br>
<p>Este e-mail foi enviado em <b>$send_date</b> às <b>$send_time</b></p>
</body>
</html>
";

$destination = 'thallesg@egocomunicacao.com.br';
$subject = "Contato pelo site";

$headers  = "MIME-Version: 1.0\n";
$headers .= "Content-type: text/html; charset=utf-8\n";
$headers .= "From: $nome <$email>";

mail($destination, $subject, $body, $headers);

echo "<meta http-equiv='refresh' content='10;URL=../index.php'>";
?>