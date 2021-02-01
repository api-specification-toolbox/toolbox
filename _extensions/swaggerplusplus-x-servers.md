---
name: Swaggerplus Servers
slug: swaggerplusplus-servers
property: x-servers
description: >-
  Define OpenAPI 3.x `servers` [Server Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#server-object)
  elements in an OpenAPI 2.0 API description document.
  This allows converting OpenAPI 2.0 to OpenAPI 3.0 for tools which work with OpenAPI 3.0.
example:
  info: ...
  host: https://api.gigantic-server.com/v1
  x-servers:
    - url: https://development.gigantic-server.com/v1
      description: Development server
    - url: https://staging.gigantic-server.com/v1
      description: Staging server
    - url: https://api.gigantic-server.com/v1
      description: Production server
tags:
  - Migration
created: "2021-01-29"
modified: "2021-01-29"
image: http://api.specificationtoolbox.com/images/extensions/swaggerplusplus-servers.png
url: https://raw.githubusercontent.com/api-specification-toolbox/toolbox/main/_extensions/
specificationVersion: "0.14"
apis: []
include: []
x-common:
  - type: x-website
    url: https://github.com/Mermade/swaggerplusplus
...
