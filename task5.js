function tekrar(massiv) {
    var bosmassiv = [];
    var bosmoterize = {};
  
    massiv.forEach((item) => {
      if (!bosmoterize[item]) {
        bosmoterize[item] = true;
        bosmassiv.push(item);
      }
    });
  
    return bosmassiv;
  }
  
  console.log(tekrar([1, 2, 1, 2, 3])); 
  console.log(tekrar(['a', 2, 'd', 2, 'a', 14, 14, 's', false])); 
  