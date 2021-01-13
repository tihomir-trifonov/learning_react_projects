console.log('App.js is running!');

// JSX - JavaScript XML

const appRoot = document.getElementById('app');

class Person {
    constructor(name, age=0) {
        this.name = name || "Mungu";
        this.age = age;
    }

    getGreeting(){
        return `Greetings from ${this.name}`
    }

    getDescription(){
        return `${this.name} is a very nice guy!`
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major
    }
    getDescription(){
        let description = super.getDescription();

        if (this.major){
            description += " And majors in " + this.major
        }
        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let greet = super.getGreeting();
        if (this.homeLocation){
            greet += " who comes from " + this.homeLocation
        }
        return greet
    }
}



const me = new Traveler ("Kai", 28);

console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());





const renderApp = () => {

    const template = (
        <div>

        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderApp()