---
name: balena assignment
description: "REST API server which uses node-cache to maintain state.  It records
  drone positions in 3 dimensions (latitude, longitude and altitude) and follows HATEOAS
  application architecture principles. Each drone POSTs a JSON document with its location
  on launch then sends updates via PUT requests.  The JSON documents are validated
  using JSON schema before being accepted for processing.  After validating the JSON
  the application calculates the drone\u2019s horizontal and vertical speed and stores
  it in node-cache.  GET requests can be used to return the location of a single drone
  or all the drones that are currently active in GeoJSON format. GeoJSON was chosen
  to simplify integration with external tools like Leaflet, Elastic Maps or Google
  BigQuery.  DELETE requests are issued at the end of a flight to mark a drone as
  inactive.    The application includes a web server endpoint which delivers an html
  file to display drone locations in a table and highlight slow moving ones.  It also
  includes a REST API client which can be used to issue POST, PUT and DELETE requests
  to populate it"
image: ""
specificationVersion: "0.14"
x-rank: "0"
x-alexaRank: 0
created: "2020-12-23"
modified: "2020-12-23"
url: http://api.specificationtoolbox.com/resources/tools/balena-assignment/
tags:
- Validating
- Updates
- Stores
- Store
- Speed
- Server
- Sends
- Send
- Schema
- REST
- Requests
- Records
- Record
- Query
- Process
- Principles
- Posts
- Maps
- Locations
- Live
- JSON Schema
- JSON
- Integration
- Includes
- HTML
- High
- Google
- Go
- GitHub JSON Schema Search
- Flight
- Elastic
- Drones
- Drone
- Documents
- Display
- Dimensions
- Dating
- Dates
- Current
- Client
- CLI
- Cache
- Architecture
- Architect
- API
- Active
- Accepted
- Accept
apis: []
x-common:
- type: x-github
  url: https://github.com/pgoldtho/balena-assignment/
include: []
maintainers:
- FN: Kin Lane
  x-twitter: apievangelist
  email: info@apievangelist.com
---