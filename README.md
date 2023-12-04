# RPG-random-password-generator
Generate random passwords with ease! This npm package allows you to create strong and secure passwords by specifying the desired length.

## Installation

```bash
npm install rps:random-password-generator

## Usage
Simply call the generatePassword function and provide the desired length as an argument.

const randomPassword = require('random-password-generator');

const password = randomPassword.generatePassword(10);
console.log(password);

This will generate a random password with a length of 10 characters, including a mix of lowercase letters, uppercase letters, numeric, and special characters.

## API
generatePassword(length: number): string
Generates a random password with the specified length.

length (required): The length of the generated password.

## Example
const randomPassword = require('random-password-generator');

const password = randomPassword.generatePassword(12);
console.log(password);
This will output a random password with a length of 12 characters.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing
Feel free to contribute by opening issues or creating pull requests. Your feedback is highly appreciated!

## Acknowledgments
Inspired by the need for a simple and secure password generator.
