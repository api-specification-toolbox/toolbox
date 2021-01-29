---
name: Swaggerplus Trace
slug: swaggerplusplus-trace
property: x-trace
description: >-
  Define OpenAPI 3.x `trace` [Path Iem](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#pathItemObject) operation
  elements in an OpenAPI 2.0 API description document.
  This allows converting OpenAPI 2.0 to OpenAPI 3.0 for tools which work with OpenAPI 3.0.
example:
  paths:
    /books:
      x-trace:
        operationId: books-trace
        desription: The TRACE HTTP operation for the books resource.
        responses: ...
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
