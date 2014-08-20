function loadUsers(userIds, load, done) {
      var users = new Array(userIds.length), left = userIds.length,
        after = function(idx, value){
          users[idx] = value;
          left--;
          if(left === 0){ done(users); }
        };
      for (var i = 0; i < userIds.length; i++) {
        load(userIds[i], after.bind(null, i));
      }

    }

module.exports = loadUsers
