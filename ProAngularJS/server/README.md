# simple server
This is simple HTTP server to serve this book samples. It uses Node.js `connect` module.

## Installation
To install run simple command:

	npm install
	
This will install all required node modules.

## Run
There 1 simple script `server.js` which takes exactly 1 argument: chapter number. Chapter number must be valid integer in range between 1 and 25 inclusive.
Sample run command to server samples from Chapter 01 (ch01 folder):

	node server.js 1