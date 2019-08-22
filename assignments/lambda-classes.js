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

class Student extends Person {
    constructor (previousBackground, className, favSubjects){
        super(name);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
    }

    listsSubjects (subject){
        this.favSubjects.forEach(subject => console.log(subject));
        ;
    }

    prAssignment (subject){
        return `${this.name} has submitted a PR for ${subject}`
    }

    sprintChallenge (subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}


class ProjectManager extends Instructor {
    constructor (gradClassName, favInstructor){
        super(name);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }

    standUp (slackChannel){
        console.log(`${this.name} announces to ${slackChannel} @channel standy times`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);

}

