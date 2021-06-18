/*
Coding in function topSecret, function accept 1 parameter:file. 
file is an encrypted string.

Encryption using the right shift 3. Your job is to decrypt the 
file and read the contents of the file, and then answer my 
three questions. If the answer is correct, you will pass the 
test. Note: the decryption should be left shift; Shift is only 
for uppercase and lowercase letters, other characters will 
remain the same; The shift mode is a cyclic shift, for example:

character "A" after decryption should be "X" instead of ">"
character "B" after decryption should be "Y" instead of "?"
character "C" after decryption should be "Z" instead of "@"
character "a" after decryption should be "x" instead of "^"
character "b" after decryption should be "y" instead of "_"
character "c" after decryption should be "z" instead of "`"
Additional hints: Fixed testcase only test the correctness 
of the decryption code. The answer to the three question 
will appear only after clicking on "Submit".
*/ 

// param file
// capital letter -3, smaller letter +23
const topSecret = str => str.replace(/[a-z]/gi, c => String.fromCharCode(c.charCodeAt(0) + (/[abc]/i.test(c) ? 23 : -3)))
