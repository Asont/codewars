function whatNumberIsIt(n){
  switch (!isNaN(n) && n){
      case 1.7976931348623157e+308: return "Input number is Number.MAX_VALUE";
      break;
      case 5e-324: return "Input number is Number.MIN_VALUE";
      break;
      case 1/0:  return "Input number is Number.POSITIVE_INFINITY";
      break;
      case -Number.MAX_VALUE*2: return "Input number is Number.NEGATIVE_INFINITY";
      break;
      case Infinity+1: return "Input number is Number.POSITIVE_INFINITY";
      break;
      case false: return "Input number is Number.NaN";
      break;
      default : return"Input number is " + n;
  }
  
}