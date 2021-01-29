---
name: Swaggerplus JSON Schema Nullable
slug: swaggerplusplus-nullable
property: x-nullable
description: >-
  Add to a Schema Object in an OpenAPI 2.0 API description document to use the `nullable` JSON Schema construct.
  This allows converting OpenAPI 2.0 to OpenAPI 3.0 for tools which work with OpenAPI 3.0.
example:
  components:
    schemas:
      book:
        title: Book
        description: Representation of a published book.
        properties:
          title:
            nullable: false
            schema:
              type: string
tags:
  - Migration
  - JSON Schema
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
