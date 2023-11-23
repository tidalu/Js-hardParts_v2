function createObj (name, score) {
    const User = {}
    
    User.name = name ;
    User.score = score;
    User.increment = function (){
      User.score++;
    }
    
    return User;
  }
  
  
  console.log(createObj("Name", 3))