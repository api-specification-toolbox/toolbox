---
name: APIMATIC CodeGen Settings
slug: apimatic-codegen-settings
property: x-codegen-settings
description: APIMATIC offers numerous settings that enables you to configure generic code styling, endpoint settings, model settings, continuous integration settings, code branding options, etc at the time of generating code. More details of these can be viewed at Code Generation Settings. In order to specify these settings you will need to use the CodeGen Settings extension. Using this extension simply involves using a property x-codegen-settings within the “Info” object. The “Info” object is used in Swagger for providing metadata about the API. Details of this object can be viewed at Swagger Info Object (v2, v3). The x-codegen-settings property is an object that will look something like this.
example:
  info:
    x-codegen-settings:
      nullify404: true
      generateAsyncCode: true
      useMethodPrefix: true
      useModelPostfix: true
      useControllerPostfix: true
      useEnumPostfix: true
      useConstructorsForConfig: true
      iOSUseAppInfoPlist: true
      iOSGenerateCoreData: false
      androidUseAppManifest: true
      collectParameters: false
      csharpDefaultNamespace: ACME.CORP.API
      javaDefaultPackageName: com.acme.corp.api
      appendContentHeaders: true
      brandLabel: ACME Corp.
      userAgent: APIMATIC 2.0
      enableAdditionalModelProperties: false
image: http://api.specificationtoolbox.com/images/extensions/apimatic-codegen-settings.png
tags:
- Code
- Generation
created: "2021-01-05"
modified: "2021-01-05"
url: https://raw.githubusercontent.com/api-specification-toolbox/toolbox/main/_extensions/apimatic-codegen-settings.md
specificationVersion: "0.14"
apis: []
include: []
x-common:
- type: x-website
  url: https://docs.apimatic.io/advanced/swagger-codegen-extensions/#codegen-settings
...
