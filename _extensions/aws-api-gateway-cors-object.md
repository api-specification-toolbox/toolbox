---
name: AWS API Gateway CORS Object
slug: aws-api-gateway-cors-object
property: x-amazon-apigateway-cors object
description: Specifies the cross-origin resource sharing (CORS) configuration for an HTTP API. The extension applies to the root-level OpenAPI structure. To learn more, see Configuring CORS for an HTTP API.
example:
  x-amazon-apigateway-cors:
    allowOrigins:
    - https://www.example.com
    allowCredentials: true
    exposeHeaders:
    - x-apigateway-header
    - x-amz-date
    - content-type
    maxAge: 3600
    allowMethods:
    - GET
    - OPTIONS
    - POST
    allowHeaders:
    - x-apigateway-header
    - x-amz-date
    - content-type
image: http://api.specificationtoolbox.com/images/extensions/aws-api-gateway-cors-object.png
tags:
- CORS
- Security
created: "2021-01-05"
modified: "2021-01-05"
url: https://raw.githubusercontent.com/api-specification-toolbox/toolbox/main/_extensions/aws-api-gateway-cors-object.md
specificationVersion: "0.14"
apis: []
include: []
x-common:
- type: x-website
  url: https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-cors-configuration.html
...
