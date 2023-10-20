function temizle(massiv) {
    var temizle = massiv.filter(item => {
      return ![false, undefined, '', 0, null].includes(item);
    });
  
    return temizle;
  }
  
  var daxiledilen = [0, 1, false, 2, undefined, '', 3, null];
  var netice = temizle(daxiledilen);
  
  console.log(netice); 
  