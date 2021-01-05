---
name: APIMATIC Additional Headers
slug: apimatic-additional-headers
property: x-additional-headers
description: APIMATIC allows defining global headers that are sent with every API call using the Addition Headers extension. These headers are in addition to any headers required for authentication or defined as parameters. These headers can be specified inside the Security Scheme Object (v2, v3) using property name x-additional-headers.
example:
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
      x-additional-headers:
      - name: api-version
        description: The version number indicator for the API
        schema:
          default: '1.1'
      - name: sdk-version
        description: The version number indicator for the SDK
        schema:
          default: 1.1.0.1
image: http://api.specificationtoolbox.com/images/extensions/apimatic-additional-headers.png
tags:
- Headers
created: "2021-01-05"
modified: "2021-01-05"
url: https://raw.githubusercontent.com/api-specification-toolbox/toolbox/main/_extensions/
specificationVersion: "0.14"
apis: []
include: []
x-common:
- type: x-website
  url: https://docs.apimatic.io/advanced/swagger-codegen-extensions/#additional-headers
...
