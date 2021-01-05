---
name: AWS API Gateway Auth Object
slug: aws-api-gateway-auth-object
property: x-amazon-apigateway-auth object
description: Defines an authorization type to be applied for authorization of method invocations in API Gateway.
example:
  openapi: 3.0.1
  info:
    title: openapi3
    version: '1.0'
  paths:
    "/protected-by-iam":
      get:
        x-amazon-apigateway-auth:
          type: AWS_IAM  
image: http://api.specificationtoolbox.com/images/extensions/aws-api-gateway-auth-object.png
tags:
- Authentication
- Gateway
created: "2021-01-05"
modified: "2021-01-05"
url: https://raw.githubusercontent.com/api-specification-toolbox/toolbox/main/_extensions/aws-api-gateway-auth-object.md
specificationVersion: "0.14"
apis: []
include: []
x-common:
- type: x-website
  url: https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-auth.html
...
