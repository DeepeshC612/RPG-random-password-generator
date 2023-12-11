# RPG-random-password-generator
Generate random passwords with ease! This npm package allows you to create strong and secure passwords by specifying the desired length and pattern.

## Installation
```bash
npm install rps-random-password-generator
```

## Usage
call the `generatePassword` function and provide the desired length as an argument. And provide pattern as per the requirement of a password.
```bash
const randomPassword = require('rps-random-password-generator');

const password = randomPassword.generatePassword({
  length: 10,
  pattern: {
    upperCase: false,
    lowerCase: true,
    specialCharacter: true,
    numeric: true,
  },
});
console.log(password);
```
This will generate a random password with a length of 10 characters, including a mix of lowercase letters, numeric, and special characters and uppercase letters is excluded as the value is false. Setting the value false will not include that pattern.

## API
`generatePassword({ length: number, pattern: { upperCase: boolean, lowerCase: boolean }): string`

Generates a random password with the specified length.

`length` (required): The length of the generated password.

`pattern` (optional): The pattern of the generated password.

`upperCase` (optional): The choice of upper letters true/false of the generated password.

`lowerCase` (optional): The choice of lower letters true/false of the generated password.

`specialCharacter` (optional): The choice of special characters true/false of the generated password.

`numeric` (optional): The choice of numeric true/false of the generated password.

## Example
```bash
const randomPassword = require('rps-random-password-generator');

const password = randomPassword.generatePassword({
  length: 10,
  pattern: {
    upperCase: false,
    lowerCase: true,
    specialCharacter: true,
    numeric: true,
  },
});
console.log(password);
```
This will generate a random password with a length of 10 characters, including a mix of lowercase letters, numeric, and special characters and uppercase letters is excluded as the value is false. Setting the value false will not include that pattern. Pattern object is optional skip it if only want random password.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing
Feel free to contribute by opening issues or creating pull requests. Your feedback is highly appreciated!

## Acknowledgments
Inspired by the need for a simple and secure password generator.
