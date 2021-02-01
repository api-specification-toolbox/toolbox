---
name: Swaggerplus Links
slug: swaggerplusplus-links
property: x-link
description: >-
  Define OpenAPI 3.x `links` [{Link Object}](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#link-object) map
  an OpenAPI 2.0 API [Response Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#response-object).
  This allows converting OpenAPI 2.0 to OpenAPI 3.0 for tools which work with OpenAPI 3.0.
example:
  responses:
    '200':
      description: A book resource
      content-type: application/json
      x-links:
        - operationId: getAuthor
        - operationId: getPublisher
tags:
  - Migration
created: "2021-01-29"
modified: "2021-01-29"
image: http://api.specificationtoolbox.com/images/extensions/swaggerplusplus-links.png
url: https://raw.githubusercontent.com/api-specification-toolbox/toolbox/main/_extensions/
specificationVersion: "0.14"
apis: []
include: []
x-common:
  - type: x-website
    url: https://github.com/Mermade/swaggerplusplus
...
