function isDivideBy(number, a, b) {
    if (Number.isInteger(number/a) && Number.isInteger(number/b)){
      return true;
    } else {return false;}
  }