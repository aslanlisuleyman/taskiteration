function deyisYazi(yazi) {
    const yenimassiv = yazi.split('');
  
    yenimassiv.forEach((element, index, array) => {
      if (element === element.toUpperCase()) {
        array[index] = element.toLowerCase();
      } else {
        array[index] = element.toUpperCase();
      }
    });
  
    return yenimassiv.join('');
  }
  
  console.log(deyisYazi('saLamNecesen')); 
  