<?php
$msg = _get["name"] . _get["phone"] . _get["email"] . _get["location"] . _get["guests"] . _get["message"];
mail("devonleeh@gmail.com","Subject",$msg);
?>