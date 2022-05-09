let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Step 1. Remove last string in the array.
secretMessage.pop()

// Step 2. Checks out.
23

// Step 3. Add 'to' and 'Program' to end of the array.
secretMessage.push('to', 'Program');

// Step 4. Change 'easily' to 'right'.
secretMessage.splice(secretMessage.indexOf('easily'), 1, 'right');

// Step 5. Remove first string in the array.
secretMessage.shift();

// Step 6. Add 'Programming' to the beginning of the array.
secretMessage.unshift('Programming');

// Step 7. Remove 'get', 'right', 'the', 'first', 'time', and replace with 'know'.
secretMessage.splice(secretMessage.indexOf('get'), secretMessage.indexOf('right'), secretMessage.indexOf('the'), secretMessage.indexOf('first'), secretMessage.indexOf('time'), 1, 'know');

// Step 8. Print the message!
console.log(secretMessage.join());