<?php
function sendEmail($jsonData) {
    $data = json_decode($jsonData, true);

    // Перевірка обов'язкових полів
    if (empty($data['name']) || empty($data['contact'])) {
        return 'Ім\'я та контакт - обов\'язкові поля';
    }

    // Встановлення параметрів для відправлення електронної пошти
    $to = 'hello@roden.design';
    $subject = 'Нова форма від '.$data['name'];
    $message = 'Контактна інформація: '.$data['contact'];
    $headers = array(
        'From: '.$data['name'].' <'.$data['link'].'>',
        'Reply-To: '.$data['contact'],
        'Content-Type: text/html; charset=UTF-8'
    );

    // Додавання вкладення (якщо воно було прикріплено до форми)
    if (!empty($_FILES['attachment']['tmp_name'])) {
        $attachment = chunk_split(base64_encode(file_get_contents($_FILES['attachment']['tmp_name'])));
        $filename = $_FILES['attachment']['name'];
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-Type: multipart/mixed; boundary="boundary"';
        $message = "--boundary\r\n";
        $message .= "Content-Type: text/html; charset=UTF-8\r\n";
        $message .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
        $message .= $message."\r\n\r\n";
        $message .= "--boundary\r\n";
        $message .= "Content-Type: application/octet-stream; name=\"$filename\"\r\n";
        $message .= "Content-Transfer-Encoding: base64\r\n";
        $message .= "Content-Disposition: attachment; filename=\"$filename\"\r\n\r\n";
        $message .= $attachment."\r\n\r\n";
        $message .= "--boundary--";
    }

    // Відправлення електронної пошти
    if (mail($to, $subject, $message, implode("\r\n", $headers))) {
        return 'Повідомлення надіслано';
    } else {
        return 'Виникла помилка при відправленні повідомлення';
    }
}
?>
