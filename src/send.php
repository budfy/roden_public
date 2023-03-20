<?php
ini_set('error_reporting', E_ALL);
ini_set('diplay_errors', 1);
ini_set('display_startup_errors', 1);

define("TG_TOKEN","5959828748:AAGfflaaL0ar2r4Jn2Mih1g0SGlECqfortM");
define("TG_CHAT","-646211857");

// $textMessage = "Тестове повідомлення";
// $textMessage = urlencode($textMessage);

// $urlQuery = "https://api.telegram.org/bot". TG_TOKEN ."/sendMessage?chat_id=". TG_CHAT ."&text=" . $textMessage;

$getQuery = array(
  
)

$result = file_get_contents($urlQuery);
?>
