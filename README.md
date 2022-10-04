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

### POST `/api/employee`
Create an employee, 
Req body :
- name
- address
- email
- organization

### PUT `/api/employee/:id`
Update an Employee with employee id in params, 
Req body :
- name
- address
- email
- organization

### DELETE `/api/employee/:id`
Delete an Employee with employee id in params

.
.
.

## Testing Purpose Routes (Not detail because of high chances will be removed)
### `/endpoints`
You can see All available routes in its respond (JSON)

### `/api/auth/signup`
Make a USER

### `/api/auth/signin`
login User

### `/api/test/all`
Get a page with certain permission in scope (everyone can access)

### `/api/test/user`
Get a page with certain permission in scope (User can access)

### `/api/test/mod`
Get a page with certain permission in scope (Moderator can access)

### `/api/test/admin`
Get a page with certain permission in scope (Admin can access)
