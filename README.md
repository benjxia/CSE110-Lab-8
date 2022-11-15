# Lab 8 - Starter

## Partners

1. 笨虾 ben xia
2. Nobody because I have no friends :(

## The questions
1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.  
   After code is pushed with a github action. You can't guarantee people will run the tests before pushing, may as well publicly humiliate them. 
2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)  
   No
3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user. 
   No, unit tests are just for checking function input/output. Messaging requires a lot of pieces
   and an end to end test would probably be the best.
4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
   Yes, just a simple function so you can just test input/output. return string.length <= max_msg_len;