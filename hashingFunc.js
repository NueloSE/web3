// import the crypto module
const crypto = require("crypto");

// import readline module and create an interface to request user input
const readlines = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function hashingPhoneNumber(phoneNumber) {
  //Create a SHA-256 hash of the passed phone number
  const hasher = crypto.createHash("sha256");
  hasher.update(phoneNumber);
  const hashedValue = hasher.digest("hex");

  return hashedValue;
}

// Prompt the user for their phone number

function promptUserInput() {
  readlines.question("Enter your phone number: ", (phoneNumber) => {
    if (phoneNumber == "done") readlines.close();
    else {
      const hashVal = hashingPhoneNumber(phoneNumber);
      console.log(`The Hash value for ${phoneNumber} is:\n\t${hashVal}`);
      promptUserInput();
    }
  });
}

promptUserInput();
