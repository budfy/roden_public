<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

define("TG_TOKEN","5959828748:AAGfflaaL0ar2r4Jn2Mih1g0SGlECqfortM");
define("TG_CHAT","-646211857");

$url = "https://api.telegram.org/bot" . TG_TOKEN . "/sendMessage";

$textMessage = "";

foreach ( $_POST as $key => $value ) {
  if ( $key != "file"){
    $textMessage .= "<b>$key:</b> $value\n";
    }
}

$getQuery = array(
"chat_id"   => TG_CHAT,
'text'      => $textMessage,
"parse_mode"=> "html"
);



// $ch = curl_init("https://api.telegram.org/bot". TG_TOKEN ."/sendMessage?".http_build_query($getQuery));
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
// curl_setopt($ch, CURLOPT_HEADER, false);

// $resultQuery = curl_exec($ch);
// curl_close($ch);

function curl($url, $data = [], $method = 'GET', $options = [])
{
    $default_options = [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HEADER => false,
        CURLOPT_SSL_VERIFYPEER => false,
    ];

    if ($method === 'GET') {
        $url .= (strpos($url, '?') === false) ? '?' : '&';
        $url .= http_build_query($data);
    } 
    if ($method === 'POST') {
        $options[CURLOPT_POSTFIELDS] = http_build_query($data);
    } 
    if ($method === 'JSON') {
        $options[CURLOPT_POSTFIELDS] = json_encode($data);
        $options[CURLOPT_HTTPHEADER][] = 'Content-Type:application/json';
    }

    $ch = curl_init($url);
    curl_setopt_array($ch, array_replace($default_options, $options));

    $result = curl_exec($ch);
    if ($result === false) {
        throw new ErrorException("Curl error: ".curl_error($ch), curl_errno($ch));
    }
    curl_close($ch);
    return $result;
}

echo curl($url, $getQuery);
?>
