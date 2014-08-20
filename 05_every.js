function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
    return submittedUsers.every(function(a){
      return goodUsers.some(function(b){
        return a.id == b.id;
      });
    });
  };
}

module.exports = checkUsersValid;
