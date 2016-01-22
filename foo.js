var foo = function(name, age) {
  
    this.name = name;
    this.age = age;

};

foo.prototype.getName = function() {

    return this.name;

};

foo.prototype.setName = function(name) {

    var name = name;

};

foo.prototype.getAge = function() {

    return this.age;

};
foo.prototype.setAge = function(age) {

    var age = age;
};

//需要暴露出来的代码，提高代码的使用
module.exports = foo;
