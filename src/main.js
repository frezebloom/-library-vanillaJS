import './style/main.css';
import {Input} from './input.js';

window.onload = () => {
  var input = document.getElementsByTagName("input");
  for(var i = 0; i < input.length; i++){
    console.log(input[i]);
  }
  const name = document.getElementById("name").onchange = (event) => {
    let nameValue = new Input(event.target.value);
    console.log(nameValue.Save());
  }

}
