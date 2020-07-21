class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }

}
class Moderator extends User{
  addCoins(){
      this.luCoins++;
      console.log(`${this.name} has ${this.luCoins} coins`);
      return this;
  }
  removecoins(){
    this.lucoins--;
    console.log(`${this.name} has ${this.lucoins} coins`);
  }
}
class Admin extends Moderator{
   addCourse(user,course){
       user.courses.push(course);
       console.log(user);
   }
}

let ad= new Admin('Aaryan',21,"a@gmail.com");
let user1=new User(`Prat`,20,`p@gmail.com`);
let user2=new User(`Varun`,22,`v@gmail.com`);
let mod=new Moderator(`Sanju`,20,`s@gmail.com`);
let users=[user1,user2,mod,ad];
ad.addCourse(user2,`Arpr`)
user2.login().addCoins().addCoins().logout()
