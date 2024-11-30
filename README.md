# siit-assignment-07
This assignment requires you to create a functional registration form that integrates a front-end and back-end server setup. You will implement a local server using json-server and json-server-auth packages, manage user registration through the form, and handle both successful and error scenarios using DOM manipulation.


Initialize the Project

In your project folder, run npm init to generate a package.json file.

Install Dependencies

Install the json-server package, version 0.17.4.
Install the json-server-auth package, version 2.1.0.

Set Up the Database

Create a db.json file containing at least the users property as an empty array:
{
  "users": []
}

Set Up Routes

Create a routes.json file to define access restrictions for the users resource. Use the permission: 600 setting to restrict read and write access to the resource owner. Refer to the course example for assistance.

Edit package.json Scripts

Update the scripts property in package.json to include:
"start": "json-server-auth --watch db.json -r routes.json"
This command will start the server using npm run start, with the specified database and routes configuration.