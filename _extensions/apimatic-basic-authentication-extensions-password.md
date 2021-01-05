---
name: APIMATIC Basic Authentication Extensions - Password
slug: apimatic-basic-authentication-extensions-password
property: x-rename-password-as
description: By default, basic authentication requires username and password as input parameters. If you need to override the names of these parameters for code generation.
example:
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
      x-rename-password-as: secret
image: http://api.specificationtoolbox.com/images/extensions/apimatic-basic-authentication-extensions.png
tags:
- Security
- Authentication
created: "2021-01-05"
modified: "2021-01-05"
url: https://raw.githubusercontent.com/api-specification-toolbox/toolbox/main/_extensions/
specificationVersion: "0.14"
apis: []
include: []
x-common:
- type: x-website
  url: https://docs.apimatic.io/advanced/swagger-codegen-extensions/#basic-authentication-extensions
...
