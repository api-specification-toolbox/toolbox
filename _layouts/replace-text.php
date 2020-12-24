<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$replace_this = "kinlane-productions";
$replace_that = "kinlane-productions2";

$path = '/Users/kinlane/Documents/github/kin-lane/the-us-narrative-today';

$di = new RecursiveDirectoryIterator($path);
foreach (new RecursiveIteratorIterator($di) as $filename => $file) {

  $switch = 1;

  $_site = strpos($filename, "_site");
  if ($_site === false) {} else { $switch = 0; }

  $git = strpos($filename, ".git");
  if ($git === false) {} else { $switch = 0; }

  $git = strpos($filename, "/.");
  if ($git === false) {} else { $switch = 0; }

  $git = strpos($filename, ".pdf");
  if ($git === false) {} else { $switch = 0; }

  $git = strpos($filename, ".jpg");
  if ($git === false) {} else { $switch = 0; }

  $git = strpos($filename, ".png");
  if ($git === false) {} else { $switch = 0; }

  $git = strpos($filename, ".jpeg");
  if ($git === false) {} else { $switch = 0; }

  $git = strpos($filename, ".js");
  if ($git === false) {} else { $switch = 0; }

  if($switch == 1){

    $myfile = fopen($filename, "r") or die("Unable to open file!");
    if(filesize($filename) > 0)
      {
      $contents = fread($myfile,filesize($filename));
      fclose($myfile);

      //echo $contents . chr(13) . chr(10);
      echo $filename .  chr(13) . chr(10);
      $contents = str_replace($replace_this,$replace_that,$contents);

      //fwrite($myfile, $contents);

      $myfile2 = fopen($filename, "w") or die("Unable to open file!");
      fwrite($myfile2, $contents);
      fclose($myfile2);
      }

  }



}


?>
