/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Principle 1 Window/Global Object Binding: When this is called by itself it represents the Global Object which is the container for the 
javascript code unique to each instance of its occurance. On a web browser the global object is called window. The Global Object is the initial state in which Javascript 
executes code before refering to functions at they are called inside it. It provides Javascript with its basic functionality.

* 2. Principle 2 Implicit Binding: When "this" is called in this format this.something this refers to the object directly preceding what "something represents" 

* 3. Principle 3 New binding: In this case "this" refers to the particular object that was created by a constructor function, the constructor function has this keywords as 
variable declarations which represent some form of information (e.g. primitive data types, functions, sub-objects) that are instantiated in a new object when the constructor
called to instantiate it.

* 4. Principle 4 Explicit Binding: Explicit binding allows a programmer to explicitly point to the environment in which this refers to its container object using the call or 
apply methods. By calling or applying a certain object this now refers to that object.  
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function logThis () {

    console.log(this);
}

logThis();

// Principle 2

// code example for Implicit Binding

const goodBye = {
    farewell: 'Goodbye',
    sayGoodbye: function(name) {
      console.log(`${this.farewell} ${name} it was nice to meet you!`);
      console.log(this);
    }
  };

  goodBye.sayGoodbye('Aaron');
  

// Principle 3

// code example for New Binding

function newObj (attr){

    this.something = attr.something;
    this.youGuessedIt = attr.youGuessedIt;
    this.saySomething = function () {console.log(this.something)};
    this.sayPig = function () {console.log(this.youGuessedIt)};
}

const happyNewObj = new newObj ({

    something: 'A Rat',
    youGuessedIt: "Big Pig"
})



console.log(happyNewObj.sayPig());

// Principle 4

// code example for Explicit Binding


const happyTinyNewObj = new newObj ({

    something: 'utube',
    youGuessedIt: "Big Pig"
})

happyNewObj.saySomething.call(happyTinyNewObj);


  