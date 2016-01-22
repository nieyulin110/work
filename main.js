function Main(name,age){
    this.name = name;
    this.age = age;
};

Main.prototype.setName = function(name){

    var name = name;
};

Main.prototype.getName = function(){
  return name;
};
