$msg = "First line of text\nSecond line of text";
$msg = wordwrap($msg,70);
mail("devonleeh@gmail.com,"SUBJECT",$msg)