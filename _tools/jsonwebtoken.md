---
name: jsonwebtoken
description: A demo back end server exposes user registration endpoint, user authentication
  endpoint, token endpoint and resource endpoint. The resource endpoint is protected
  by the JWT token. Only the client who possesses the valid token can access the resource.
  To get a token from the server, the client must authenticates itself to the server.
  To request the resource in the server, the client issue an http GET request to the
  resource endpoint, the server will verify the recieved jwt token. Once the token
  is valid, the server will send back the user information which indicated in the
  jwt token.  Front-end has not been implemented so far. The back-end is tested using
  Postman.
image: ""
specificationVersion: "0.14"
x-rank: "0"
x-alexaRank: 0
created: "2020-12-23"
modified: "2020-12-23"
url: http://api.specificationtoolbox.com/resources/tools/jsonwebtoken/
tags:
- Verify
- Server
- Send
- Self
- Me
- JSON
- Information
- HTTP
- GitHub Postman Search
- Front
- From
- Exposes
- End
- Client
- CLI
- Back End
- Authentication
- Authenticates
- Access
apis: []
x-common:
- type: x-github
  url: https://github.com/gloryer/jsonwebtoken/
include: []
maintainers:
- FN: Kin Lane
  x-twitter: apievangelist
  email: info@apievangelist.com
---