function bmi(weight, height) {
    if ((weight/Math.pow(height,2))<=18.5) {
      return "Underweight";
    } else if ((weight/Math.pow(height,2))<=25) {
      return "Normal";
    } else if ((weight/Math.pow(height,2))<=30) {
      return "Overweight";
    } else if ((weight/Math.pow(height,2))>30) {
      return "Obese";
    }
  
  }