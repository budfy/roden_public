<?php
function sendEmail($formData) {
    $toEmail = 'hello@roden.design';
    $subject = 'Заявка з сайту від ' . $formData['name'];
    
    $boundary = md5(time());

    // headers
    $headers = "From: " . $formData['name'] . "\r\n";
    $headers .= "Reply-To: " . $formData['email'] . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/form-data; boundary=\"" . $boundary . "\"\r\n";
    
    // message content
    $message = "Content-Type: text/plain; charset=\"utf-8\"\r\n";
    $message .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
    $message .= "Ім'я: " . $formData['name'] . "\r\n";
    $message .= "Посилання: " . $formData['link'] . "\r\n";
    if (!empty($formData['message'])) {
        $message .= "Повідомлення: " . $formData['message'] . "\r\n";
    }
    
    // file attachment
    if (!empty($_FILES['file']['name'])) {
        $attachment = chunk_split(base64_encode(file_get_contents($_FILES['file']['tmp_name'])));
        $message .= "--" . $boundary . "\r\n";
        $message .= "Content-Type: application/octet-stream; name=\"" . $_FILES['file']['name'] . "\"\r\n";
        $message .= "Content-Transfer-Encoding: base64\r\n";
        $message .= "Content-Disposition: attachment\r\n\r\n";
        $message .= $attachment . "\r\n";
    }

    // send email
    if (mail($toEmail, $subject, $message, $headers)) {
      echo "<script>"
        echo "console.log(\"Повідомлення успішно надіслано.\")";
      echo "</script>"
    } else {
      echo "<script>"
        echo "console.log(\"Помилка відправлення повідомлення.\")";
      echo "</script>"
    }
}
?>
