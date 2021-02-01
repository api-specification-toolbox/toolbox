---
name: Swaggerplus JSON Schema oneOf
slug: swaggerplusplus-oneof
property: x-oneOf
description: >-
  Add to a Schema Object in an OpenAPI 2.0 API description document to use newer `oneOf` JSON Schema constructs.
  This allows converting OpenAPI 2.0 to OpenAPI 3.0 for tools which work with OpenAPI 3.0.
example:
  components:
    schemas:
      x-oneOf:
        - schemaObject1: {}
        - schemaObject2: {}
        - schemaObject3: {}
        - ....
tags:
  - Migration
  - JSON Schema
created: "2021-01-29"
modified: "2021-01-29"
image: ../images/extensions/swaggerplusplus-oneof.png
url: https://raw.githubusercontent.com/api-specification-toolbox/toolbox/main/_extensions/
specificationVersion: "0.14"
apis: []
include: []
x-common:
  - type: x-website
    url: https://github.com/Mermade/swaggerplusplus
...
