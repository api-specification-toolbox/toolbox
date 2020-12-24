---
name: IreporterReactJs
description: "# iReporterApi iReporter is an application whose aim is to reduce corruption
  in Africa and foster economic development. It allows users to create red flags and
  interventions. It implents the following list of APIs.  ### Framework used The application
  is built using python: flask framework. >[Flask](http://flask.pocoo.org/) is a microframework
  for the Python programming language.   ### End points Method | Endpoint | Usage
  | | ---- | ---- | --------------- | |POST| `/api/v2/auth/signup` |  Register a user.
  | |POST| `api/v2/auth/login` | Login user.| |POST| `api/v2/auth/logout` | Logs out
  a user.| |POST| `api/v2/interventions` | Create a new incident. | |GET| `api/v2/interventions`
  | Get all the created incidents. | |GET| `api/v2/interventions/user` | Get all incident
  of the logged in user. | |GET| `api/v2/interventions/<incident_id>` | Get a single
  incident. | |PATCH| `api/v2/interventions/<incident_id>/location` | Update a single
  incident location. | |PATCH| `api/v2/interventions/<incident_id>/comment` | Update
  a single incident comment. | |PATCH| `api/v2/interventions/<incident_id>/status`
  | Update a single incident status. | |DELETE| `api/v2/interventions/<incident_id>`
  | Delete a single incident. |  ## Installation \U0001F575 - To run on local machine
  git clone this project : ``` $ git clone https://github.com/larryTheGeek/iReporterApi.git
  ``` Copy and paste the above command in your terminal, the project will be downloaded
  to your local machine.  To Install python checkout: ``` https://www.python.org/
  ```  - create a virtualenv and make it use python 3 using the following command.
  ``` $ virtualenv -p python3 env ``` - activate the virtual environment ```  $ source
  env/bin/activate ``` - Install Requirements ``` $ pip install -r requirements.txt
  ``` ### Testing - Run Test using pytest with the following command ``` $ py.test
  --cov=app test`  ``` you will get the test coverage report on your terminal   The
  app can also be tested via Postman - Run App  ``` $ python run.py ``` The app should
  be accessiable via : http://127.0.0.1:5000/  open postman and navigate to the API
  endpoints described above  ### HEROKU URL  https://ireporter-version2.herokuapp.com/api/v2/
  \  ### Owner - Larry Karani  ### Motivation https://www.youtube.com/watch?v=wHRUDL7GKmI"
image: ""
specificationVersion: "0.14"
x-rank: "0"
x-alexaRank: 0
created: "2020-12-23"
modified: "2020-12-23"
url: http://api.specificationtoolbox.com/resources/tools/ireporterreactjs/
tags:
- YouTube
- Work
- Watch
- VAT
- Users
- Used
- Usage
- Testing
- Terminal
- Status
- Signup
- Run
- Require
- Reporter
- Register
- React
- Python
- Programming
- Points
- Patch
- Open
- New
- Method
- Me
- Low
- Logs
- Logout
- Login
- Local
- Load
- Language
- Incidents
- HTTPS
- HTTP
- Heroku
- Go
- GitHub Postman Search
- GitHub
- Git
- Framework
- Following
- Flask
- Flags
- End
- Development
- Coverage
- Corruption
- Copy
- Clone
- Check
- Ask
- API
- Allows
- Access
apis: []
x-common:
- type: x-github
  url: https://github.com/LarryKarani/IreporterReactJs/
include: []
maintainers:
- FN: Kin Lane
  x-twitter: apievangelist
  email: info@apievangelist.com
---