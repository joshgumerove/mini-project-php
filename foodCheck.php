<?php

header('Content-Type: text/xml');

echo '<response>';

$item = $_GET['item'];

$itemArray = array('burger', 'pizza', 'milk', 'bread', 'coke');

if (in_array($item, $itemArray))
  {
  echo "We do have a $item in stock";
  }

  elseif($item=="") {
    echo 'Enter something';
  }
  
else
  {
  echo "We do not have a $item in stock";
  }

echo '</response>';

?>