var users = [
   {
     id: 1,
     name: 'Enrico',
     surname: 'Bruno'
   },
   {
     id:2,
     name: 'Santo',
     surname:'Terranova'
   },
   {
     id: 3,
     name: 'Damiano',
     surname: 'Pulvirenti'
 }
];
var backup=JSON.parse(JSON.stringify(users));
exports.getAll=function(){
  return users;
}

exports.getUserById=function(id){
  for (var i = 0; i < users.length; i++) {
    if (id===users[i].id){
      return users[i];
    }
    return null;
  }
}
exports.addUser = function(newUser){
  var lastUserId= users[users.length-1].id;
  users.push({
    id:lastUserId+1,
    name: newUser.name,
    surname:newUser.surname,
  });
}
exports.deleteUsers= function(id){
  for (var i = 0; i < users.length; i++) {
    if (id===users[i].id){
      return users.splice(i,1);
      }
    }
    return null;
}
exports.modifyUser = function(id,newUser){
  for( var i in users){
    var user= users [i];
    if (user.id===id){
      user.name=newUser.name;
      user.surname=newUser.surname;
      return users;
    }
  }
  return null;
}

exports.reset=function(){
  user=JSON.parse(JSON.stringify(backup));
}

console.log( this.getUserById(1));
var newUser = {name:"Alessia", surname:"Ciccarello"}
console.log( this.addUser(newUser));
console.log( this.deleteUsers(3));
console.log( this.modifyUser(2,{name:"Alessio", surname:"Barresi"}));
console.log( this.getAll());
