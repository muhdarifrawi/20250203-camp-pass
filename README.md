# Camp Pass Mockup
## Introduction
The purpose of this mockup is to demonstrate the intended outcome of how a digital camp pass 
would possibly look like. It is supposed to be used with Singpass however due to the requirement 
of using Corppass to access the API, this mockup was done in this manner instead.

## Warnings and Limitations
THIS MOCKUP USES QUERY STRINGS TO MAKE IT EASIER TO BUILD THE MOCKUP. DO NOT DO THIS WHEN BUILDING.
As Singpass requires Corppass, I am unable to implement the needed verification. 
This is just a MOCKUP and no proper security was implemented.

## Test Users
Test users has been created for this demonstration. They can be found under `data.js`.

### Test Users
| First Name    | Last Name     | Username     | Password    | Unit   | Company  | Designation | Permissions     |
| :------------ |:------------- |:-------------| :---------- | :----- | :------- | :-----------| :-------------- |
| Hawk          | Eye           | hawkeye      | password123 | 3DIV   | None     | Admin       | full-control    |
| John          | Doe           | johndoe      | password123 | 32CSSB | security | oc          | company-control |
| James         | Poe           | jamespe      | password123 | 32CSSB | security | 2ic         | company-control |
| Jack          | Joe           | jackjoe      | password123 | 32CSSB | security | pc          | platoon-control |
| Peter         | Jackson       | peterjackson | password123 | 32CSSB | security | ps          | platoon-control |
| Wes           | Anderson      | wesanderson  | password123 | 32CSSB | security | man         | user-only       |

Use the Username and Password to login.

### Permissions
Users are given different level of control depending on their roles/designation. 

Full-Control:
Highest level of control. They are allowed to add and edit users of different company. 
Can view platoon, company and division roster.

Company-Control:
Can only edit roles within company and permissions up to company only. 
Can view platoon, company and division roster.

Platoon-Control:
Can only edit roles within platoon and permissions up to platoon only. 
Can view platoon and company roster.

User-Only:
Can only view platoon roster.
