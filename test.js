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
exports.addUsers = function(newUser){
  var lastUserId= users[users.lenght-1].id;
  user.push({
    id:lastUserId+1,
    name: name,
    surname:surname,
  });
}
exports.deleteUsers= function(id){
  for (var i = 0; i < users.length; i++) {
    if (id===users[i].id){
      return users.splice(i,1);
      }
    return null;
  }
}
exports.modifyUser = function(id,newUser){
  for( var i in users){
    var user= users [i];
  }
}
