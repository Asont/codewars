function datingRange(age){
  if(age<=14) {
 let  minJ = Math.floor(age - 0.10 * age);
  let maxJ = Math.floor(age + 0.10 * age);
   return  minJ.toString()+"-"+maxJ.toString(); }
 else {
    let min = Math.floor(age/2+7);
    let max= Math.floor((age-7)*2);
    return min.toString()+"-"+max.toString();
  }
}