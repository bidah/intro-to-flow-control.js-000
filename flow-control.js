'use strict';

function basicTeenager(age) {
  if(age >= 13 && age <= 19){ 
    return "You are a teenager!"
  }
}

function teenager(age) {
  if(age >= 13 && age <= 19){ 
    return "You are a teenager!"
  } else {
    return "You are not a teenager";
  }
}

function ageChecker(age) {
  if(age >= 13 && age <= 19){
    return "You are a teenager!";
  } else if(age > 19) {
    return "You are a grownup";
  } else {
    return "You are a kid";
  }
}

function ternaryTeenager(age){
  return (age >= 13 && age <= 19) ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age){
  var teen_or_not =  (age >= 13 && age <= 19)
  switch(teen_or_not){
    case(true): 
      return  "You are a teenager";
      break;
    case(false):
      return "You have an age";
      break;
  }
}
