<?php
require "main.php";

$tpl->assign(array("title" => "Hello World Here", "content" => "Hello World"));

$tpl->display('index.htm');

?>