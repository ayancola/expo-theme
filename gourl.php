<?php

include "common/config.inc.php";
$url = surl2($_GET["url"]);
//header("location:".$url);
//if(strstr($url,"metalsinfo.com"))
{
?>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
正在转跳到 <? echo $url?> ，请稍候.....
<script>window.location.href='<? echo $url?>';</script>
<?
}
?>