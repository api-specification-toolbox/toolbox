---
name: Swaggerplus Description
slug: swaggerplusplus-description
property: x-description
description: >-
  Add a OpenAPI 3.x `description` to elements such as path items in an OpenAPI 2.0 API description document
  where `description` is not allowed.
  This allows converting OpenAPI 2.0 to OpenAPI 3.0 for tools which work with OpenAPI 3.0.
example:
  paths:
    "/books":
      x-description: This resource is a collection of books.
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
