let passcode = 1234528;
let link = "https://www.freecodecamp.org/learn";
let text = `Enter the passcode if wrong redirects to \n${link}:`;

let answer = prompt(text);
if (answer != passcode) location.replace(link);
