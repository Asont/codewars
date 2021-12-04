function getGrade (s1, s2, s3) {
  let s4 = (s1+s2+s3)/3;
  if(s4>=90 && s4<=100) {
    return "A"; 
  } else if (s4>=80 && s4<90){
    return "B";
  } else if (s4>=70 && s4<80) {
    return "C";
  } else if (s4>=60 && s4<70){
    return "D";
  } else if (s4>=0 & s4<60) {
    return "F";
  }
}

/*
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

*/