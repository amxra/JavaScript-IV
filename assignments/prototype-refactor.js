/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


// Task 1




  class PersonRefractored {
      constructor(name, age){
        this.name = name;
        this.age =age;
        this.stomach = [];    
      }

      greet = function() {
            return `Hi! My name is ${this.name}, I am ${this.age} years old`;
          }

          eat(food) {
              this.stomach.push(food);
          }

          poop = function(){
                this.stomach = [];
              }
  }


  const amira = new PersonRefractored ("amira", 25)


  // TASK 2


  class Car {
    constructor(modelName, make) {
      this.model = modelName;
      this.make = make;
      this.odometer = 0;
      this.isCrashed = false;
    }
    drive(distance) {
      if (this.isCrashed === false) {
        this.odometer += distance;
      } else {
        return `I crashed at ${this.odometer} miles!`
      }
    }
    crash() {
      this.isCrashed = true;
    }
    repair() {
      this.isCrashed = false;
    }
  }
  

   // TASK 3

   class Baby extends Person2 {
    play() {
      return "Yipeee!!!";
    }
  }
  

  // Task 4 
class Shirt {
    constructor(make, color) {
      this.color = color;
      this.make = make;
      this.isClean = true;
      this.isIroned = true;
      this.numOfWears = 0;
      this.inGoodCondition = true;
    }
    wash() {
      if (this.isClean) {
        return "It is already clean";
      } else {
        this.isClean = true;
      }
    }
    iron() {
      if (this.isIroned) {
        return "It is already ironed";
      } else {
        this.isIroned = true;
      }
    }
    wear() {
      if (this.inGoodCondition) {
        if (this.isClean && this.isIroned) {
          this.numOfWears += 1;
          this.isClean = false;
          this.isIroned = false;
          if (this.numOfWears > 10) {
            this.inGoodCondition = false;
          }
        }
        else {
          return "Make sure your shirt is washed and ironed";
        }
      } else {
        return "You have to mend this shirt before you can wear it"
      }
    }
    mend() {
      this.inGoodCondition = true;
    }
  }
  
  STRETCH TASK
 
  Object oriented design is commonly used in video games. You will be implementing several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.
  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
 
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
class GameObject {
  constructor(data) {
    this.createdAt = data.createdAt;
    this.name = data.name;
    this.dimensions = data.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
class CharacterStats extends GameObject {
  constructor(data) {
    super(data);
    this.healthPoints = data.healthPoints;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
class Humanoid extends CharacterStats {
  constructor(data) {
    super(data);
    this.team = data.team;
    this.weapons = data.weapons;
    this.language = data.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`
  }
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});
const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});
const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});