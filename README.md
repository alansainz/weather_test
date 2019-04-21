# weather_test

## Getting Started
In order to use the application, first run:

### `cd flow-weather-front && npm install`

Then: 

### `npm start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
Launches the test runner in the interactive watch mode.

### `npm test -- --coverage`
Runs code coverage reporter. Current code coverage is 92.68%.

# Notes
I've created the React application using `create-react-app`, alongside Redux & Styled Components. For testing purposes I've used Jest, Enzyme, Istanbul and a little of `react-testing-library` because testing React Hooks on Enzyme is not yet [fully supported](https://github.com/airbnb/enzyme/issues/2011).
