// CODE here for your Lambda Classes


class Person {
    constructor(name, location, age){
        this.name  =name;
        this.location = location;
        this.age =age;
    }
    speak (){
        console.log (`Hello my name is ${this.name}, I am from ${this.location} `)
    }
}

// const amira = new Person ('amira','lagos', 12)

// console.log(amira.speak());


class Instructor extends Person {
    constructor (specialty, favLanguage, catchPhrase){
        super(name);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demo (subject){
        return `Today we are learning about ${subject}`
    }

    grade (student, subject){
        return '{student.name} receives a perfect score on ${subject}'
    }
}

