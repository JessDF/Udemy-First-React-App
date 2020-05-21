//1. Import React and ReactDOM libraries
import React from 'react'; //Get code from react dependency and assign to variable: React
import ReactDOM from 'react-dom'; //Get code from react-dom dependency and assign to variable: ReactDOM

//2. Create a react component 
// A component is a function or class that produces HTML to show to user (using JSX) and handles the feedback from the user (using Event Handlers)
const App = () => { 
  return <div>Hi There!!</div>;
}

//3. Take react component and show it on the screen
ReactDOM.render(
  <App/>,
  document.querySelector('#root') //given a reference to a div within index.html
);