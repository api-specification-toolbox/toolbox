---
name: Dec api
description: 'Build a RESTful API/MICROSERVICE with the following implementations
  :   The API/Microservice must perform these basic CRUD Operations :              -
  Accepts a request to add a new entry into the database.        - Accepts a request
  to update an existing entry into the database.        - Accepts a request to retrieve
  all the existing entries from the database.        - Accepts a request to retrieve
  a single entry with respect to a particular field (ID, Name, etc.. )  from the database.    a.
  Products : Products Table Schema : Decathlon_Products ProductID  | ProductName  |
  ProductSport | ProductLevel | ProductDescription  | AssociatedStores |    b. Stores
  : DB Table Schema : Decathlon_Stores StoreID  | StoreName  | StoreCity |       Note
  : 1. ''AssociatedStores'' is the field to capture the StoreIDs in which the product
  is available. It can be multiple stores.  2. Both Products and Stores API can be
  called separately and together to perform the above mentioned functions. For Ex:
  Expose one endpoint (for example: /stores/{store_id}/products/{product_id} ) to
  retrieve the details of the product associated to a store. Expose one endpoint (
  /stores/store_id/products ) to list all the products available in that particular
  store.  3. IDs and names cannot be updated.  4. You can use Spring Boot(Java) or
  Django Framework (with Python) or any framework you are comfortable with to build
  the application with Maven.  5. You can use an in-memory database : H2/Apache Derby.  6.
  You can use Postman as the REST Client to send requests.   Security : Implement
  a Basic Authorization security mechanism, which is validated on all requests.'
image: ""
specificationVersion: "0.14"
x-rank: "0.1"
x-alexaRank: 0
created: "2020-12-23"
modified: "2020-12-23"
url: http://api.specificationtoolbox.com/resources/tools/dec-api/
tags:
- Work
- Stores
- Store
- Spring Boot
- Spring
- Send
- Security
- Schema
- Retrieve
- REST
- Requests
- Python
- Products
- Operations
- New
- Names
- Multi
- Memory
- Me
- Maven
- Low
- Java
- Implementations
- Go
- GitHub Postman Search
- Functions
- From
- Framework
- Following
- Existing
- Entries
- End
- Django
- Derby
- Database
- CRUD
- Client
- CLI
- Capture
- Cannot
- Base
- Authorization
- Author
- Associated
- Art
- API
- Apache
- Accept
apis: []
x-common:
- type: x-github
  url: https://github.com/Pal0720/Dec-api/
include: []
maintainers:
- FN: Kin Lane
  x-twitter: apievangelist
  email: info@apievangelist.com
---