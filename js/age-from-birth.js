function age(birthYear) {
  let calculatedAge = new Date().getFullYear() - birthYear;
  if (calculatedAge == 1) {
    return "1 år";
  } else if (calculatedAge == 0) {
    return "Nyfödd";
  } else {
    return `${calculatedAge} år`;
  }
}
