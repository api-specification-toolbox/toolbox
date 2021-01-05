---
name: AWS API Gateway Any Method Object
slug: aws-api-gateway-any-method-object
property: x-amazon-apigateway-any-method object
description: The following example integrates the ANY method on a proxy resource, {proxy+}, with a Lambda function, TestSimpleProxy.
example:
  x-amazon-apigateway-any-method:
    produces:
    - application/json
    parameters:
    - name: proxy
      in: path
      required: true
      type: string
    responses: {}
    x-amazon-apigateway-integration:
      uri: arn:aws:apigateway:us-east-1:lambda:path/2015-03-31/functions/arn:aws:lambda:us-east-1:123456789012:function:TestSimpleProxy/invocations
      httpMethod: POST
      type: aws_proxy
image: http://api.specificationtoolbox.com/images/extensions/aws-api-gateway-any-method-object.png
tags:
- Gateway
created: "2021-01-05"
modified: "2021-01-05"
url: https://raw.githubusercontent.com/api-specification-toolbox/toolbox/main/_extensions/aws-api-gateway-any-method-object.md
specificationVersion: "0.14"
apis: []
include: []
x-common:
- type: x-website
  url: https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-any-method.html
...
