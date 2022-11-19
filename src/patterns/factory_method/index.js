//Using classes
class Alien {
    constructor (name, phrase) {
        this.name = name
        this.phrase = phrase
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    sayPhrase = () => console.log(this.phrase)
}

const alien1 = new Alien("Ali", "I'm Ali the alien!")
console.log(alien1.name) // output: "Ali"

//Using a factory function
function Alien2(name, phrase) {
    this.name = name
    this.phrase = phrase
    this.species = "alien"
}

Alien2.prototype.fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
Alien2.prototype.sayPhrase = () => console.log(this.phrase)

const alien2 = new Alien2("Ali", "I'm Ali the alien!")

console.log(alien2.name) // output "Ali"
console.log(alien2.phrase) // output "I'm Ali the alien!"
alien2.fly() // output "Zzzzzziiiiiinnnnnggggg"