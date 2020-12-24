---
name: spring security db
description: This objective of this project is to perform CRUD operations in a secured
  way. BASIC authentication is required to insert/update/read/delete the records from
  RECORDS table using following URLs.  http://localhost:8080/all - GET http://localhost:8080/getSimpleRecord
  http://localhost:8080/secured/getRecords http://localhost:8080/secured/getRecord/2
  http://localhost:8080/secured/createRecord - POST http://localhost:8080/secured/updateRecord
  - PUT http://localhost:8080/secured/deleteRecord - DELETE  The URLs having secured
  in it, needs to be hit using BASIC authentication in POSTMAN using mmsr/mmsr as
  username and password. The default format of the records displayed is json. But
  you can also view the records in XML by appending the urls with ".xml" e.g.  http://localhost:8080/secured/getAllRecords
  - JSON http://localhost:8080/secured/getAllRecords.xml - XML
image: ""
specificationVersion: "0.14"
x-rank: "0.3"
x-alexaRank: 0
created: "2020-12-23"
modified: "2020-12-23"
url: http://api.specificationtoolbox.com/resources/tools/spring-security-db/
tags:
- View
- URLs
- Spring
- Security
- Secured
- Secure
- Required
- Require
- Records
- Record
- Password
- Operations
- Me
- Low
- Local
- JSON
- HTTP
- Host
- GitHub Postman Search
- From
- Following
- End
- Display
- Default
- CRUD
- Authentication
apis: []
x-common:
- type: x-github
  url: https://github.com/mmsrgit/spring-security-db/
include: []
maintainers:
- FN: Kin Lane
  x-twitter: apievangelist
  email: info@apievangelist.com
---