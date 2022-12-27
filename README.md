# Zen Calendar

<p align="center">
  <img src="src/images/ZenCalendar.png">  
</p>

Muti purpose platform that allows users to make new events on a calendar, create a to-do-list, as well as build a grocery list.

## Features

The App uses BigCalendar package that allows a user to add events. User can add tasks to a to-do-list, as well as add recipe ingredients to a grocery list. With the use RecipeAP2 it allows the user to search through an API and pick out recipes. Once the recipe is selected the ingredients automatically get added to the grocery list. 



## Installation

**1. Clone the repository to your local maching**

**2. Navigate into the root folder and run the build command**
  
  To install all node packages:
  ```
  $ npm install
  ```

**3. Add the necessary environment variables**

  
  First navigate to the root directory and create `env.development`
  
  Navigate to this file and add the following:
  
  ```javascript
      REACT_APP_API_URL=http://localhost:8000
  ```
  
  This setup will only work if you run JSON-Server on port 8000. If you're running it on a different port, then update the `REACT_APP_API_URL` variable to match.

  **5. Start up the servers**
  
  Run this to start up the JSON-Server backend:
  ```
  $ json-server --watch src/data/db.json --port 8000
  ```
  
  Then, in another terminal, run this to start up the React frontend:
  ```
  $ npm start
  ```

