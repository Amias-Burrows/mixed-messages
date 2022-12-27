const generator = () => {

		// Storing the different partsin a multidiensional array.  Keeping it organised and easy to access later on
	let messageParts = {
		first: [ 'What did the pirate say', 'How many tickles does it take', 'What do you call a', 'Yesterday I ate a clock,' ],
		second: [ 'on his 80th birthday?', 'to make an octopus laugh?', 'aligator in a vest?', 'It was very time consuming.' ],
		third: [ 'Aye matey!', 'Ten Tickles', 'An investigator', 'Especially when I went back for seconds' ]
	};

		// This is selecting a random index number for each of the different message parts
	let first = Math.floor(Math.random() * (messageParts.first.length - 1));
	let second = Math.floor(Math.random() * (messageParts.second.length - 1));
	let third = Math.floor(Math.random() * (messageParts.third.length - 1));

		// This will return the message to the calling function.  This means I can reuse it on the browser and in Node
	return `${messageParts.first[first]} ${messageParts.second[second]} ${messageParts.third[third]}`;
}

	// Makes sure I can use the functionality on the browser without having to rewrite the code
export default generator;

	// The node function to call
console.log(generator());
