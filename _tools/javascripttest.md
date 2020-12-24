---
name: JavaScriptTest
description: "Use nodejs and mongoDB to build a web app loosely modeled on Spotify,
  with the following features: \u25CF Register/Login/Logout \u25CF View all songs
  (including song info like #listens, artist, album) \u25CF Add/Remove song from library
  \u25CF View library \u25CF View artists and their songs Use a well designed db schema
  to efficiently perform the above actions (even when scaled). Optional: Use React.js
  and/or graphql Include as many features as you can, and add more functionality if
  possible :) Write a function to javascript/node to solve the following problem:
  Consider a scenario in our web app above: Users can follow other users, and they
  can follow others (thus creating a network of users). Given a song name and username,
  identify users in his network that have the given song in their library. We\u2019ll
  test your code on hidden inputs. Input will be of the following format: First line
  will contain an int N - no of users The next N2 lines will contain: userID NoOfSongs
  Song1 Song2 Song3 \u2026 The next N 2 lines will contain a userID followed by his
  follow list. The final line will contain a userID and songID Output all users in
  the given user\u2019s network that have the given song in their library. Input:
  Number of users N(int) userID1(int) numberOfSongs K(int) SongId1(int) songid2 songId3
  \u2026. SongIdk . . . userID2(int) numberOfSongs m(int) SongId1 songid2 songId3
  \u2026. SongIdm UserID1 userID2 UserID3 . . UserId1 SongId2 Input: 4 112112 3 1
  2 3 100100 5 3 77 33 9 8 111110 2 99 77 666666 1 3 112112 100100 111110 110110 666666
  111110 112112 100100 666666 111110 112112 3 Output: 100100 666666"
image: ""
specificationVersion: "0.14"
x-rank: "0.2"
x-alexaRank: 0
created: "2020-12-23"
modified: "2020-12-23"
url: http://api.specificationtoolbox.com/resources/tools/javascripttest/
tags:
- Work
- Users
- Spotify
- Schema
- Remove
- Register
- React
- Output
- NodeJS
- Network
- Move
- MongoDB
- Logout
- Login
- Listen
- JavaScript
- Java
- Including
- GraphQL
- Graph
- Go
- Github GraphQL Search
- Functional
- Following
- Followed
- Features
- Design
- Artists
- Actions
- Action
apis: []
x-common:
- type: x-github
  url: https://github.com/taodailin/JavaScriptTest/
include: []
maintainers:
- FN: Kin Lane
  x-twitter: apievangelist
  email: info@apievangelist.com
---