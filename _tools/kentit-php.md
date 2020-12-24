---
name: kentit.php
description: '<?php set_time_limit(0); /* * Script Auto Click Bitcoin * https://thebestbitcoinfaucet.com
  * Code by Postman FB.com/adippostman */ echo "AUTO CLICK BITCOIN thebestbitcoinfaucet.com\n";
  inputwallet(); claimbtc(); function inputwallet(){ echo "BTC WALLET ADDRESS:"; $GLOBALS["btcwallet"]
  = read(); $login = access("https://thebestbitcoinfaucet.com", "cookie.{$GLOBALS["btcwallet"]}",
  "address={$GLOBALS["btcwallet"]}&sponsor="); if ( preg_match("/Invalid/i", $login)
  ) { echo "INVALID BTC WALLET ADDRESS\n"; unset($GLOBALS["btcwallet"]); inputwallet();
  } elseif ( preg_match("#Only one account is allowed#i", $login) ) { echo "Only one
  account is allowed to access the faucet from a unique IP address\n"; unset($GLOBALS["btcwallet"]);
  exit(); } else { echo "LOGIN SUCCESSFULLY !\n"; } } function claimbtc(){ $leftclaim
  = "1"; while ($leftclaim != "0"){ $claim = access("https://thebestbitcoinfaucet.com",
  "cookie.{$GLOBALS["btcwallet"]}", "faucetclaim={$GLOBALS["btcwallet"]}"); preg_match_all("#<b>Balance
  : (.*?)</h2>#is", $claim, $balance); preg_match_all("#Claims Available : (.*?) </div>#is",
  $claim, $available); preg_match_all("#<p align=''left''>You claimed (.*?) BTC\.</p>#is",
  $claim, $claimed); echo "BTC Wallet : {$GLOBALS["btcwallet"]}\n"; echo "Claimed
  : {$claimed[1][0]} BTC\n"; echo "Balance : {$balance[1][0]}\n"; echo "Claims Available
  : {$available[1][0]}\n"; echo "Sleep for 30 Seconds .. .\n"; echo "#############################\n";
  $leftclaim = $available[1][0]; sleep(30); } } function access($url, $cookies = null,
  $post = null) { $ch = curl_init(); $options = [ CURLOPT_URL => $url, CURLOPT_RETURNTRANSFER
  => true, CURLOPT_SSL_VERIFYPEER => false, CURLOPT_SSL_VERIFYHOST => true, ]; if
  ( $cookies != null ) { $options[CURLOPT_COOKIEJAR] = $cookies; $options[CURLOPT_COOKIEFILE]
  = $cookies; } if ( $post != null ) { $options[CURLOPT_POST] = true; $options[CURLOPT_POSTFIELDS]
  = $post; } curl_setopt_array($ch, $options); $data = curl_exec($ch); curl_close($ch);
  return $data; } function read($length = null){ if ( !isset($GLOBALS["StdinPointer"])
  ) { $GLOBALS["StdinPointer"] = fopen("php://stdin", "r"); } $line = $length != null
  ? fgets($GLOBALS["StdinPointer"], $length) : fgets($GLOBALS["StdinPointer"]); return
  trim($line); } ?>'
image: ""
specificationVersion: "0.14"
x-rank: "0"
x-alexaRank: 0
created: "2020-12-23"
modified: "2020-12-23"
url: http://api.specificationtoolbox.com/resources/tools/kentit-php/
tags:
- Verify
- Unique
- Top
- Time
- PHP
- Open
- Me
- Match
- Low
- Login
- Line
- IP Address
- HTTPS
- HTTP
- Host
- Global
- GitHub Postman Search
- From
- Fields
- cURL
- Count
- Cookies
- Code
- CLI
- Bitcoin
- Balance
- Array
- Address
- Account
- Access
apis: []
x-common:
- type: x-github
  url: https://github.com/maalvise/kentit.php/
include: []
maintainers:
- FN: Kin Lane
  x-twitter: apievangelist
  email: info@apievangelist.com
---