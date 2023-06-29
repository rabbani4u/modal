"use strict";
const alertMe = () => {
  const num = Math.random() * 10;
  console.log(num);

  if (num > 5) {
    alert("Not valid number");
  }
};

const askMe = () => {
  const dicision = confirm("Are you coming tomorrow");
  console.log(dicision);
};

const getUserInfo = () => {
  const name = prompt("What is your name?");
  console.log(name);
};
