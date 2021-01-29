---
name: Swaggerplus Liks
slug: swaggerplusplus-links
property: x-link
description: >-
  Define OpenAPI 3.x `links` [{Link Object}](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#link-object) map
  an OpenAPI 2.0 API [Response Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#response-object).
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
url: https://raw.githubusercontent.com/api-specification-toolbox/toolbox/main/_extensions/
specificationVersion: "0.14"
apis: []
include: []
x-common:
  - type: x-website
    url: https://github.com/Mermade/swaggerplusplus
...
