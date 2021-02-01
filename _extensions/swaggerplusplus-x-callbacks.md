---
name: Swaggerplus Callbacks
slug: swaggerplusplus-callbacks
property: x-callbacks
description: >-
  Define OpenAPI 3.x `callbacks` [Callback Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#callback-object) operation
  elements in an OpenAPI 2.0 API description document.
  This allows converting OpenAPI 2.0 to OpenAPI 3.0 for tools which work with OpenAPI 3.0.
example:
  paths:
    "/books":
      post:
        x-callbacks:
          myCallback1: >-
            'http://callback.example.com?transactionId={$request.body#/id}':
              post:
                requestBody:
                  description: Callback payload
                  content:
                    'application/json':
                      schema:
                        $ref: '#/components/schemas/callback1Payload'
                responses:
                  '200':
                    description: Callback successfully processed and no retries will be performed.
tags:
  - Migration
created: "2021-01-29"
modified: "2021-01-29"
image: http://api.specificationtoolbox.com/images/extensions/swaggerplusplus-callbacks.png
url: https://raw.githubusercontent.com/api-specification-toolbox/toolbox/main/_extensions/
specificationVersion: "0.14"
apis: []
include: []
x-common:
  - type: x-website
    url: https://github.com/Mermade/swaggerplusplus
...
