/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// npm run start-- Codigo de inicio--//

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the consolaxxx");
};

let generateExcuse = () => {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let whoindex = Math.floor(Math.random() * who.length);
  let actionindex = Math.floor(Math.random() * action.length);
  let whatindex = Math.floor(Math.random() * what.length);
  let whenindex = Math.floor(Math.random() * when.length);

  return (
    who[whoindex] +
    " " +
    action[actionindex] +
    " " +
    what[whatindex] +
    " " +
    when[whenindex]
  );
};
