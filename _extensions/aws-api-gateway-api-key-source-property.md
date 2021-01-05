---
name: AWS API Gateway API Key Source Property
slug: aws-api-gateway-api-key-source-property
property: x-amazon-apigateway-api-key-source property
description: Specify the source to receive an API key to throttle API methods that require a key. This API-level property is a String type.
example:
  swagger: '2.0'
  info:
    title: Test1
  schemes:
  - https
  basePath: "/import"
  x-amazon-apigateway-api-key-source: HEADER
image: http://api.specificationtoolbox.com/images/extensions/aws-api-gateway-api-key-source-property.png
tags:
- Authentication
- Security
created: "2021-01-05"
modified: "2021-01-05"
url: https://raw.githubusercontent.com/api-specification-toolbox/toolbox/main/_extensions/aws-api-gateway-api-key-source-property.md
specificationVersion: "0.14"
apis: []
include: []
x-common:
- type: x-website
  url: https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-api-key-source.html
...
