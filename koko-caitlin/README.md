# Nodejs NPM Express
**Author**: Caitlin & Koko
**Version**: 1.0.0 (increment the patch/fix version number up if you make more commits past your first submission)

## Overview

Using the ExpressJS framework to set up a server file to handle HTTP requests and deliver responses so that users able to create new articles and allow guests to retrieve those new articles.

## Getting Started

Node.js/NPM will need to be installed and initialized by ‘npm init’ with along with  local packages express, body-parser & nodemon. 
Set up the ExpressJS framework by creating an express variable in server.js and calling via a second variable and set it to use a public directory for local files.
Set up a listening function to know when the server is up. The get command will get the necessary data base information and send it to the specified address (index.html).
After nodemon is installed via npm, run the node server in terminal and navigate in browser to the specified host. 
Map a second app.get() independent of the one used to populate the index.html. This function will be mapped to the new.html. This will make the form available for the user to add articles.
Refactor functions that don’t contain the this variable to arrow functions.
Generate a 404 console response when the incorrect address is attempted by a use() express command when status 404 is encountered.

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->
Used node.js/NPM, and local packages express, body-parser & nodemon. ExpressJS framework.


## Change Log

12-13-2017 10:21 am - Our app has packages installed and a starting express framework.
12-13-2017 10:58 am - Our app has an instantiated the express framework and started the node servers
12-13-2017 11:54 am - We installed nodemon to run localhost 3000 and to ensure application is functioning, which it is.
12-13-2017 1:30 pm - Our app has a fully functioning new html page.
12-13-2017 1:55 pm - Our app has a 404 error page.

## Credits and Collaborations
Worked with Jesus, Steve, Jordan, and Yohanes. 
https://www.npmjs.com/ 