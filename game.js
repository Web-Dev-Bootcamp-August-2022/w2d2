const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

let dice;

const player1 = {
	name: 'Bob',
	color: 'red',
	position: 0,
	cash: 1000,
	displayName: function () {
		console.log(this)
		console.log(`my name is ${this.name}`)
	},
	move: function () {
		dice = 1 + Math.floor(6 * Math.random())
		this.postion = (this.position + dice) % squares.length
		this.cash += squares[this.position]
	}
}

const player2 = {
	name: 'Alice',
	color: 'blue',
	position: 0,
	cash: 1000
}

// roll the dice
dice = 1 + Math.floor(6 * Math.random())
console.log(dice)
// moving the player
// if ((player1.position + dice) > squares.length - 1) {
// 	player1.postion = player1.position + dice - squares.length
// } else {
// 	player1.postion = player1.position + dice
// }

player1.postion = (player1.position + dice) % squares.length

// change the amount of cash
player1.cash += squares[player1.position]
// check the game over condition
if (player1.cash < 0) {
	console.log(`${player1.name} has lost the game`)
}

// calling a method of an object
player1.displayName()

class Player {
	constructor(name, color) {
		this.name = name
		this.color = color
		this.position = 0
		this.cash = 1000
	}
	greet() {
		console.log('hello')
	}
}
// this works, it does not crash, but 
// cash and position are then undefined
const myPlayer = new Player()
// myPlayer.name = 'bob'
// myPlayer.color = 'red'

const myPlayer2 = new Player('james', 'yellow')
console.log(myPlayer2)
console.log(myPlayer2.greet)
