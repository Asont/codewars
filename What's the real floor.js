function getRealFloor(n) {
  if (n >= 1 && n <=4 ) {
    return n-1;
  } else if ( n==0 ) {
    return n;
  } else if ( n>=5 && n<=12 ) {
    return n-1;
  } else if (n>=13) { 
    return n-2;
  } else if (n<0)
  {return n;}
}