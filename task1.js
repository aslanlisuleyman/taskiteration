function kesilenHisse(massiv, n = 1) {
    if (n <= 0) {
      return [];
    } else {
      return massiv.slice(0, n);
    }
  }
  console.log(kesilenHisse([1, 73, 99, 20])) 
  console.log(kesilenHisse([1, 73, 99, 20], 2)) 
  console.log(kesilenHisse([1, 73, 99, 20], 0)) 
  console.log(kesilenHisse([1, 73, 99, 20], 4))
