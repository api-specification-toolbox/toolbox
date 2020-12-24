---
name: mentor api
description: Docker image for a REST API serving mentor answers to user questions.
  Written in python/flask because it's easier to run the classifier directly within
  the API container. For most APIs that DON'T require python, we prefer node/express/(mongo)
  and a single graphql endpoint rather than old school REST API.
image: ""
specificationVersion: "0.14"
x-rank: "0"
x-alexaRank: 0
created: "2020-12-23"
modified: "2020-12-23"
url: http://api.specificationtoolbox.com/resources/tools/mentor-api/
tags:
- School
- Run
- REST
- Require
- Questions
- Python
- GraphQL
- Graph
- Go
- Github GraphQL Search
- Flask
- Express
- Docker
- Direct
- Classifier
- Class
- API
- Answers
apis: []
x-common:
- type: x-github
  url: https://github.com/ICTLearningSciences/mentor-api/
include: []
maintainers:
- FN: Kin Lane
  x-twitter: apievangelist
  email: info@apievangelist.com
---