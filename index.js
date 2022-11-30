/* JSON - JavaScript Object Notation */

const user = {
    firstName: 'John',
    lastName: 'Doe',
    avatar: 'https://.....',
    age: 18,
    footSize: 46,
    address: {
        street: 'Testovaya',
        house: 32
    },
    key: null,
    sayHello: function() { // function will be ignored
        console.log(`${this.firstName} say: Hello!`);
    }
}