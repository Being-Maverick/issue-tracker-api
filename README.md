# issue-tracker-api
This repository is a part of the MERN project named Issue Tracker. It contains the code for the UI written in Node and Express.
This project requires Node version 10.x and npm version 6.x.

To run this project on a your PC:

1. Clone this repository or download it as a zip.
2. Navigate to the folder api, in bash or cmd depending on your OS.
3. Run npm install to install all the required dependencies.
4. Set up MongoDB running on your machine at port 27017.
5. Create a .env file and set the following constants in it:
   a. DB_URL = Connection String to a running MongoDb instance.
   b. PORT = 3000 or any other free port on your system.
   c. UI_SERVER_ORIGIN = Url to the UI server.
6. Run "npm start" to start the backend server.
7. Now, set up, your frontend UI by following the steps mentioned in issue-tracker-ui repository.
