<?php
// Check for empty fields
if(empty($_POST['institution'])  		||
   empty($_POST['email']) 		||
   empty($_POST['username']) 		||
   empty($_POST['telephone'])	||
   empty($_POST['how'])	||
   empty($_POST['description'])	||
	
$institution = strip_tags(htmlspecialchars($_POST['institution']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$username = strip_tags(htmlspecialchars($_POST['username']));
$telephone = strip_tags(htmlspecialchars($_POST['telephone']));
$how = strip_tags(htmlspecialchars($_POST['how']));
$description = strip_tags(htmlspecialchars($_POST['description']));
	
// Create the email and send the message
$to = 'pces1120@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Formulario de Contacto:  $institution";
$email_body = "Has recibido un mensaje del formulario de contacto de www.e-college.com .\n\n"."Estos son los detalles:\n\nNombre de la institución: $institution\n\nEmail: $email\n\Nombre y Apellido: $username\n\Teléfono: $telephone\n\nCómo nos conoció:\n$how\n\nConsulta: $description";
$headers = "From: noreply@e-college.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>
