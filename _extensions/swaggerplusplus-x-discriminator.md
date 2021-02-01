---
name: Swaggerplus JSON Schema discriminator
slug: swaggerplusplus-discriminator
property: x-discriminator
description: >-
  Add to an Schema Object in an OpenAPI 2.0 API description document to use OAS 3.0 `discriminator` JSON Schema constructs.
  This allows converting OpenAPI 2.0 to OpenAPI 3.0 for tools which work with OpenAPI 3.0.
example:
  components:
    schemas:
      publication:
        x-oneOf:
          - '#/definitions/book'
          - '#/definitions/magazine'
          - '#/definitions/newspaper'
        x-discriminator:
          propertyName: publicationType
tags:
  - Migration
  - JSON Schema
created: "2021-01-29"
modified: "2021-01-29"
image: ../images/extensions/swaggerplusplus-discriminator.png
url: https://raw.githubusercontent.com/api-specification-toolbox/toolbox/main/_extensions/
specificationVersion: "0.14"
apis: []
include: []
x-common:
  - type: x-website
    url: https://github.com/Mermade/swaggerplusplus
...
