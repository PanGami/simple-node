# Hi There! <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="30" height="30"></h1>
This Project is a simple backend webapp that integrates with authentication services !

# How to run
1. Get this Repo / folder (You can choosse zip, fork, clone, etc)
2. Go to simple-node folder (cd simple-node)
3. npm install
4. edit db config at simple-node/config/config.json
5. sequelize db:migrate
6. npm start
7. Done!

# Available Routes
These Routes will be available, every routes have its scope/permission (if needed) so you can pass domain-access-token at header 

## Employee Routes
### GET `/`
Default Endpoints 

### GET `/api/employee`
Get All Employee data With Employeee Information in JSON

Req headers :
- access-token

### POST `/api/employee`
Create an employee, 
Req headers :
- access-token
- token(id_token from domain)

### PUT `/api/employee/:id`
Update an Employee with employee id in params, 
Req headers :
- access-token

Req body :
- name
- address
- email
- organization

### DELETE `/api/employee/:id`
Delete an Employee with employee id in params
Req headers :
- access-token

.
.
.

## Testing Purpose Routes 
### `/endpoints`
You can see All available routes in its respond (JSON)

# Note
Still in Development!
- Flow :
1. Frontend will do authentication and authorization using authentication service and get access-token as well as id-token
2. Frontend passing access-token from authentication service to backend in header as domain-access-token
3. Backend will verify its access-token valid or not to access certain endpoints or api
4. Backend will create employee with id-token(get user info) from domain 
5. ...