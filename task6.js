function muqayise(massiv1, massiv2) {
    if (massiv1.length !== massiv2.length) {
      return false;
    }
  
    let deyer= true;
  
    massiv1.forEach((element, index) => {
      if (element !== massiv2[index]) {
        deyer = false;
      }
    });
  
    return deyer;
  }
  
  console.log(muqayise([1, 2, 3, 4], [1, 2, 3, 4])); 
  console.log(muqayise([1, 2, 3, 4], [1, 2, 3, 4, 5])) 
  console.log(muqayise([1, 2, 3, 4], [1, 2, 3, 4, false])) 
  console.log(muqayise([1, 2, 3, 4, false], [1, 2, 3, 4, false])) 
  