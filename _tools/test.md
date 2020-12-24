---
name: test
description: '{   "swagger": "2.0",   "info": {     "version": "1.0",     "title":
  "GitHub",     "description": "GitHub is a social source code repository."   },   "host":
  "api.github.com",   "basePath": "/",   "schemes": [     "https"   ],   "securityDefinitions":
  {     "oAuth": {       "type": "oauth2",       "authorizationUrl": "https://github.com/login/oauth/authorize",       "tokenUrl":
  "https://github.com/login/oauth/access_token",       "flow": "accessCode",       "scopes":
  {         "user": "",         "public_repo": "",         "admin:repo_hook": ""       }     }   },   "consumes":
  [     "application/json"   ],   "produces": [     "application/json"   ],   "paths":
  {     "/user/repos": {       "get": {         "description": "Gets the list of repos",         "summary":
  "Get the list of repos",         "operationId": "userRepos",         "parameters":
  [],         "responses": {           "200": {             "description": "OK",             "schema":
  {               "$ref": "#/definitions/GetReposResponse"             }           },           "400":
  {             "description": "Bad Request"           },           "500": {             "description":
  "Internal Server Error"           },           "default": {             "description":
  "Operation Failed."           }         }       }     },     "/repos/{owner}/{repo}/hooks":
  {       "x-ms-notification-content": {         "description": "Details for Webhook",         "schema":
  {           "$ref": "#/definitions/WebhookPushResponse"         }       },       "post":
  {         "description": "Creates a Github webhook",         "summary": "Triggers
  when a PUSH event occurs",         "operationId": "webhook-trigger",         "x-ms-trigger":
  "single",         "parameters": [           {             "name": "owner",             "in":
  "path",             "description": "Name of the owner of targetted repository",             "required":
  true,             "type": "string"           },           {             "name":
  "repo",             "in": "path",             "description": "Name of the repository",             "required":
  true,             "type": "string"           },           {             "name":
  "Request body of webhook",             "in": "body",             "description":
  "This is the request body of the Webhook",             "schema": {               "$ref":
  "#/definitions/WebhookRequestBody"             }           }         ],         "responses":
  {           "201": {             "description": "Created",             "schema":
  {               "$ref": "#/definitions/WebhookCreationResponse"             }           }         }       }     },     "/repos/{owner}/{repo}/hooks/{hook_Id}":
  {       "delete": {         "description": "Creates a Github webhook",         "operationId":
  "DeleteTrigger",         "parameters": [           {             "name": "owner",             "in":
  "path",             "description": "Name of the owner of targetted repository",             "required":
  true,             "type": "string"           },           {             "name":
  "repo",             "in": "path",             "description": "Name of the repository",             "required":
  true,             "type": "string"           },           {             "name":
  "hook_Id",             "in": "path",             "description": "ID of the Hook
  being deleted",             "required": true,             "type": "string"           }         ]       }     }   },   "definitions":
  {     "GetReposResponse": {       "type": "array",       "items": {         "type":
  "object",         "properties": {           "description": {             "type":
  "string",             "description": "Description of repo",             "title":
  "Description of repo"           },           "html_url": {             "type": "string",             "description":
  "HTML URl of Repo",             "title": "HTML URL of Repo"           }         }       }     },     "WebhookPushResponse":
  {       "type": "object",       "properties": {         "compare": {           "type":
  "string",           "x-ms-summary": "Compare URL"         },         "head_commit":
  {           "type": "object",           "properties": {             "url": {               "type":
  "string",               "x-ms-summary": "Commit URL"             },             "author":
  {               "type": "object",               "properties": {                 "name":
  {                   "type": "string",                   "x-ms-summary": "Author
  name"                 },                 "email": {                   "type": "string",                   "x-ms-summary":
  "Author email"                 },                 "username": {                   "type":
  "string",                   "x-ms-summary": "Author username"                 }               }             },             "committer":
  {               "type": "object",               "properties": {                 "name":
  {                   "type": "string",                   "x-ms-summary": "Committer
  name"                 },                 "email": {                   "type": "string",                   "x-ms-summary":
  "Commiter email"                 },                 "username": {                   "type":
  "string",                   "x-ms-summary": "Commiter username"                 }               }             }           }         },         "repository":
  {           "type": "object",           "properties": {             "name": {               "type":
  "string",               "x-ms-summary": "Repository name"             },             "full_name":
  {               "type": "string",               "x-ms-summary": "Full repository
  name"             },             "owner": {               "type": "object",               "properties":
  {                 "name": {                   "type": "string",                   "x-ms-summary":
  "Repository owner name"                 },                 "email": {                   "type":
  "string",                   "x-ms-summary": "Repository owner email"                 }               }             },             "html_url":
  {               "type": "string",                "x-ms-summary": "Repository URL"             }           }         },         "pusher":
  {           "type": "object",           "properties": {             "name": {               "type":
  "string",                "x-ms-summary": "Pusher name"             },             "email":
  {               "type": "string",                "x-ms-summary": "Pusher email"             }           }         }       }     },     "WebhookRequestBody":
  {       "type": "object",       "properties": {         "active": {           "description":
  "State of the Trigger <make it internal always set to true> ",           "type":
  "boolean",           "default": true         },         "name": {           "description":
  "Internal - Set this always to : web ",           "type": "string",           "default":
  "web"         },         "config": {           "description": "Configuration of
  the Trigger",           "type": "object",           "properties": {             "content_type":
  {               "type": "string",               "description": "Description of repo",               "title":
  "Description of repo",               "default": "json"             },             "url":
  {               "type": "string",               "description": "HTML URl of Repo",               "title":
  "HTML URL of Repo",               "x-ms-notification-url": true,               "x-ms-visibility":
  "internal"             }           }         },         "events": {           "description":
  "Events to listen on",           "type": "array",           "default": [             "push"           ],           "items":
  {             "type": "string"           }         }       }     },     "WebhookCreationResponse":
  {       "type": "object",       "properties": {         "type": {           "type":
  "string"         },         "id": {           "type": "integer"         },         "name":
  {           "type": "string"         },         "active": {           "type": "boolean"         },         "events":
  {           "type": "array",           "items": {             "type": "string"           }         },         "config":
  {           "type": "object",           "properties": {             "content_type":
  {               "type": "string"             },             "url": {               "type":
  "string"             }           }         },         "updated_at": {           "type":
  "string"         },         "created_at": {           "type": "string"         },         "url":
  {           "type": "string"         },         "test_url": {           "type":
  "string"         },         "ping_url": {           "type": "string"         },         "last_response":
  {           "type": "object",           "properties": {             "code": {               "type":
  "string"             },             "status": {               "type": "string"             },             "message":
  {               "type": "string"             }           }         }       }     }   }
  }'
image: ""
specificationVersion: "0.14"
x-rank: "0"
x-alexaRank: 0
created: "2020-12-23"
modified: "2020-12-23"
url: http://api.specificationtoolbox.com/resources/tools/test/
tags:
- Visibility
- Triggers
- Trigger
- Title
- Target
- Swagger
- Summary
- Status
- Server
- Security
- Scope
- Scheme
- Schema
- Required
- Require
- Repos
- Push
- Public
- Properties
- Path
- Parameters
- OAuth
- Me
- Mail
- Low
- Login
- Listen
- Last
- JSON
- Items
- Internal
- HTTPS
- HTTP
- HTML
- Host
- Hooks
- GitHub Swagger Search
- GitHub JSON Schema Search
- GitHub
- Git
- Event
- Email
- Default
- Creation
- Content
- Consumes
- Consume
- Compare
- Code
- Base
- Authorization
- Author
- Array
- API
- Admin
- Active
- Access
apis: []
x-common:
- type: x-github
  url: https://github.com/duanxuemin/test/
include: []
maintainers:
- FN: Kin Lane
  x-twitter: apievangelist
  email: info@apievangelist.com
---