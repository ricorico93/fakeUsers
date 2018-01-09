#FakeUsers
##Create FakeUsers
## Install
npm install fake1-users-package

```js

console.log( this.getUserById(1));// returnFakeUsers  ( id 1 )
var newUser = {name:"Alessia", surname:"Ciccarello"}
console.log( this.addUser(newUser));// create new FakeUser
console.log( this.deleteUsers(3)); // delete FakeUser with id (3)
console.log( this.modifyUser(2,{name:"Alessio", surname:"Barresi"}));//modify FakeUser with id (2)
console.log( this.getAll());//Return all FakeUsers
.
```
