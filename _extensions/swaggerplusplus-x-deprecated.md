---
name: Swaggerplus Deprecated
slug: swaggerplusplus-deprecated
property: x-deprecated
description: >-
image: http://api.specificationtoolbox.com/images/extensions/swaggerplusplus-deprecated.png
  Mark OpenAPI 3.x elements as `deprecated` [label](url) in an OpenAPI 2.0 API description document.
  This allows converting OpenAPI 2.0 to OpenAPI 3.0 for tools which work with OpenAPI 3.0.
example:
  components:
    parameters:
      bookIdPathParam:
        - name: bookId
          in: path
          schema:
            type: string
          description: The ID of a book.
          x-deprecated: true
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
