# DEXMA Entry Test

## Online Demo -> https://covid-19-dash-board-ita.herokuapp.com/

## Description:

At the page loading the Client makes 2 Async HTTP Request with GET method in concurrently at 

http://localhos:8080/covid19/backend and https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json
, 

If the Request returns an Error we will view an Error message , else we will view the Output Data with tables , charts , calendars , maps...

It would has been better to set port 80 since It is the standard port of the HTTP protocol but Xampp didn't make me set it up.

The PHP Script (http://localhos:8080/covid19/backend) reads the CSV file at https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/

dati-andamento-nazionale/dpc-covid19-ita-andamento-nazionale.csv , puts the content into a variable , then convert It into Array of

Associative-Array (key => Value , the Key is the Column) from which I will take the last 10 elements and finally convert It into a JSON

that will printed with the "echo" keyword. There is also Error prevention.

In the JSON file at https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json I take the

Covid-19 data of the Italians Regions for generate a simple dynamic Map.

The layout is responsive.


### Languages , Framworks , Libraries , Tools used:

    Back-end:

        - PHP (no libraries).

    Front-end:

        - React-JS.

    	- Javascript ( Babel , ES6 )

        - Bootstrap.

        - SASS.

    	- HTML

    Other:

        GIT , GITHUB , Xampp for Apache.

    	Visual studio code on Windows 10.

    	Atom on Ubuntu desktop 20.10.

## Available Scripts

In the project directory, you can run:

### `npm install`

This comand will fetch the dependecies in package.json file.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `serve -s build`

This comand will start a Server provided by React that can serve the build App
present in the build folder.\
Open [http://localhost:5000](http://127.0.0.1:5000) to view it in the browse
.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://127.0.0.1:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# My NPM commands

### `npm run backend`

This command will start Apache Web Server in background (this will work only in my PC).

### `npm run frontend`

This command will run [`npm run build && serve -s build`].

### `npm run fetch`

This command will run [`npm install`].

### `npm run open_build`

This command open [http://localhost:5000/](http://127.0.0.1:5000/) with the default broswer.

### `npm run dev`

This is the most important command , It run concurrently this commands:

    1 ) `npm run frontend`.

    2 ) `npm run backend`.

You can start the project with only this command.
