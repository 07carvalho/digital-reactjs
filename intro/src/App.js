import React from 'react';
import logo from './logo.svg';
import Button from './Button';
import './App.css';

function soma(a, b) {
	alert(a + b);
}

function App() {
  return (
    <div className="App">
    	<h3>Hello World!</h3>
    	<Button onClick={() => soma(10,20)} name="Soma"/>
    </div>
  );
}

export default App;
