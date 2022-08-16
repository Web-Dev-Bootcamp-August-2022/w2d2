class Animal {
	constructor(name, sound) {
		this.name = name
		this.sound = sound
	}
	makeSound() {
		console.log(this.sound)
	}
}

class Cat extends Animal {
	constructor(name, sound, number) {
		// 'super' refers to the parent class
		// we need to pass name and sound 
		// to the parent constructor
		super(name, sound)
		this.numberOfLives = number
	}
	// overriding the parent's makeSound method

	makeSound() {
		// execute the animals makeSound()
		super.makeSound()
		console.log('this is the sound of the cat')
	}
}
class Bird extends Animal {
	constructor(name, sound) {
		super(name, sound)
	}
	fly() {
		console.log('i am flying')
	}
}
const kitty = new Cat('kitty', 'meow', 9)
console.log(kitty)
kitty.makeSound()