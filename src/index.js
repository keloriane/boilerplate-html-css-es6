import _ from 'lodash';
import './style.css';
import './style.scss';
import './api.js';



function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
  
    // Lodash, currently included via a script, is required for this line to work
    
  
    return element;
  }
  

