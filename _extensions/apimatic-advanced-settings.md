---
name: APIMATIC Advanced Settings
slug: apimatic-advanced-settings
property: x-operation-settings
description: APIMATIC allows further customization of endpoints (called operations in Swagger) through the Advanced Settings extensions. These extensions can be specified inside the Swagger Operation Object (v2, v3).
example:
  paths:
    "/pets":
      post:
        operationId: addPet
        x-operation-settings:
          collectParameters: false
          allowDynamicQueryParameters: true
          allowDynamicFormParameters: false
          isMultiContentStreaming: false
          methodName: create
          groupName: pets
image: http://api.specificationtoolbox.com/images/extensions/apimatic-advanced-settings.png
tags:
- Settings
created: "2021-01-05"
modified: "2021-01-05"
url: https://raw.githubusercontent.com/api-specification-toolbox/toolbox/main/_extensions/
specificationVersion: "0.14"
apis: []
include: []
x-common:
- type: x-website
  url: https://docs.apimatic.io/advanced/swagger-codegen-extensions/#advanced-settings
...
