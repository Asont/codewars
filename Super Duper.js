function problem(x){
 let type = typeof(x);
  if (type=="string") {
    return "Error";
  } else if (type=="number") {
    return x*50+6;
  }
}

/*
Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

*/