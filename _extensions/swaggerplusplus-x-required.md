---
name: Swaggerplus JSON Schema required
slug: swaggerplusplus-required
property: x-required
description: >-
  Lists properties that were removed from a Schema Object's `required` array when
  the `swaggerplusplus` tool processed `x-anyOf`, `x-oneOf` or `x-not` schema constructs.
example:
  components:
    schemas:
      book:
        x-required:
          - title
          - authors
tags:
  - Migration
  - JSON Schema
created: "2021-01-29"
modified: "2021-01-29"
image: http://api.specificationtoolbox.com/images/extensions/swaggerplusplus-required.png
url: https://raw.githubusercontent.com/api-specification-toolbox/toolbox/main/_extensions/
specificationVersion: "0.14"
apis: []
include: []
x-common:
  - type: x-website
    url: https://github.com/Mermade/swaggerplusplus
...
