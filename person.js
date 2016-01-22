
function Person(name,age,height){
  this.name = name;
  this.age = age;
  this.height = height;
};

Person.prototype.sayHello = function(){

  console.log(this.name,this.age,this.height);

};

module.exports = Person;
