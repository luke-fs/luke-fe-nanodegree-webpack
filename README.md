# Evaluate A News Article with Natural Language Processing

Project to emphasis learning on Webpack

## Build Tools
* HTML
* JavaScript
* CSS
* Express
* Node
* Webpack
* Jest
* meaningcloud API
* Workbox

## Installation
Node and npm must be installed
```
node -v
npm -v
```

1. Installation: loaders and plugins
```
# Choose the necessary installation for your development mode
npm i -D clean-webpack-plugin
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D html-webpack-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
npm i -D mini-css-extract-plugin
```
2. Configure env variables using dotenv
	1. Install the dotenv package
	```
	npm install dotenv
	```
	2. Create a new `.env` file in the root of your project
	3. Fill the `.env` file with your API key like this:
	```
	API_KEY=**************************
	```
3. Build the project
`npm run build-prod`

4. Run the project
`npm start`

5. Open browser at http://localhost:8080/
