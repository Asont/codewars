function expressionMatter(a, b, c) {
    let num1 = a*(b+c);
    let num2 = a*b*c;
    let num3 = a+b*c;
    let num4 = (a+b)*c;
    let num5 = a+b+c;
   
     return Math.max(num1, num2, num3, num4, num5);
   }
   
   /* Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
   In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained/*/
   