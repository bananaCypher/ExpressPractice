var user = {
  nextID: 12,
  users: [
    {
      id: 1,
      name: 'Callum',
      email: 'callum@email.com',
    },
    {
      id: 2,
      name: 'Nick',
      email: 'nick@email.com',
    },
    {
      id: 3,
      name: 'Pete',
      email: 'pete@email.com',
    },
    {
      id: 4,
      name: 'Sky',
      email: 'sky@email.com',
    },
    {
      id: 5,
      name: 'Daniel',
      email: 'daniel@email.com',
    },
    {
      id: 6,
      name: 'Beth',
      email: 'beth@email.com',
    },
    {
      id: 7,
      name: 'Eveyln',
      email: 'evelyn@email.com',
    },
    {
      id: 8,
      name: 'Chris',
      email: 'chris@email.com',
    },
    {
      id: 9,
      name: 'Stuart',
      email: 'stuart@email.com',
    },
    {
      id: 10,
      name: 'Euan',
      email: 'euan@email.com',
    },
    {
      id: 11,
      name: 'Ross',
      email: 'ross@email.com',
    },
  ],
  find: function(id){
    for (var user of this.users) {
        if (user.id == id) {
          return user;
        }
    }
    return null;
  },
  newID: function(){
    id = this.nextID;
    this.nextID += 1;
    return id;
  }
}

module.exports = user;
